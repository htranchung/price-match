import React from 'react';
import { Link } from 'react-router-dom';
import LogoOnly from "../../assets/LogoOnly.svg";

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3 className='mb-10 title text-4xl font-bold title-font underline'>No Bio Card Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this thought on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <div className='profileCard '>
                    <h1 className='text-white'>
                      {thought.thoughtAuthor}
                    </h1>
                    <img className='profileImg' alt='Logo' src={LogoOnly} />
                    <p className='profileBio font-medium text-lg'>
                      {thought.thoughtText}
                    </p>
                  </div>
                </>
              )}
            </h4>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
