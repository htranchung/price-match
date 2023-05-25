import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import authService from '../utils/auth';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Navbar from "../components/Navbar";
const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is yours
  if (authService.loggedIn() && authService.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
       <Navbar />
       
      <div className="flex-row bg-[#4d3ff5] bg-gradient-to-r from-#4d3ff5 to-gray-600  justify-center mb-3">
        <div className="col-12 col-md-10 bg-dark text-light p-3 mb-5"></div>
        <div className=" text-white   col-12 col-md-10 mb-5  text-center">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s bIO...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div className="text-light   col-12 col-md-10 mb-3 p-3  text-center  border-2 border-gray-800">
            <ThoughtForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
