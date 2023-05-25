import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { ADD_THOUGHT, UPDATE_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [isUpdatingThought, setIsUpdatingThought] = useState(false);
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me;

  useEffect(() => {
    if (userData) {
      setIsUpdatingThought(userData.thoughts.length > 0);
    }
  }, [userData]);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  const [updateThought] = useMutation(UPDATE_THOUGHT);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (thoughtText) {
        if (isUpdatingThought) {
          const thoughtId = userData.thoughts[0]._id; // Use the ID of the first thought
          await updateThought({
            variables: {
              thoughtId,
              thoughtText,
            },
          });
        } else {
          await addThought({
            variables: {
              thoughtText,
              thoughtAuthor: Auth.getProfile().data.username,
            },
          });
        }

        setThoughtText('');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='containerProfile'>
      <h3 className='title text-4xl font-bold title-font mb-10 mt-10'>{isUpdatingThought ? 'Update Bio' : 'Add Bio'}</h3>

      {Auth.loggedIn() ? (
        <>
          <h1 className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''}`}>
            Character Count: {characterCount}/280
          </h1>

          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleSubmit}
          >
            <div className="col-12 col-lg-9">
              <input
                name="thoughtText"
                placeholder="Add Your Bio Here"
                value={thoughtText}
                className="textArea mt-8"
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-3">
              <button className="mt-3 text-white bg-black font-bold mr-4 py-4 px-10 rounded-full transform hover:scale-110 motion-reduce:transform-none" type="submit">
                {isUpdatingThought ? 'Update BIO' : 'Add BIO'}
              </button>
              <Link to="/"><button className="mt-5 mr-4 py-4 px-10 text-white bg-black font-bold rounded-full transform hover:scale-110 motion-reduce:transform-none" type="button">
                Close
              </button></Link>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">{error.message}</div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please <Link to="/login">login</Link> or{' '}
          <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ThoughtForm;
