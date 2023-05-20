import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import logo from '../assets/Logo.PNG';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div id="loginSignup" className="gradient-form min-h-screen bg-gradient-to-bl from-[#5228F5] to-[#392B43]  dark:bg-neutral-700">
      <div className="container flex items-center  justify-center h-screen p-10">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-center px-4 py-6 bg-gradient-to-tr from-[#241868] to-[#392B43] rounded-lg shadow-lg dark:bg-neutral-800">
            <div className="text-center  justify-center inline-block">
              <img className="w-3/6 h-50  inline-block " src={logo} alt="logo" />
            </div>
            <Link to="/">
              <button
                type="button"
                id="outlineBox"
                className="signUp mb-6 inline-block  rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase w-52 leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                style={{
                  background: 'linear-gradient(to right, #392B43, #ADADAD)',
                }}
              >
                Guest
                
              </button>
            </Link>
            <p className="flex flex-wrap mb-3 items-center justify-center text-neutral-100">or</p>
            <Link to="/signup">
            <button
              type="button"
              id="outlineBox"
              className="btn    bg-gradient-to-tr from-[#241868] via-[#392B43] to-[#241868]  btn-primary mb-6 inline-block w-52   rounded  pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] "
              
              data-te-ripple-init
              data-te-ripple-color="light"
              style={{
                background: 'linear-gradient(to right, #392B43, #ADADAD)',
              }}
            >
              Sign Up
            </button>
            </Link>

           
          </div>
          <div className="flex flex-col justify-center items-center px-4 py-6 text-white bg-gradient-to-tr from-[#241868] to-[#392B43] rounded-lg rounded-b-lg md:mx-6 md:p-12">
            {data ? (
              <p className="text-center mb-4">
                Success! You may now head <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="form login-form" onSubmit={handleFormSubmit}>
                <p className="mb-4 text-center">Login To Your Account</p>
                <div className="form-group relative mb-4" data-te-input-wrapper-init>
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-input peer block min-h-[auto] w-full rounded-lg border border-gray-400 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none"
                    id="email-login"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email-login"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500"
                  ></label>
                </div>
                <div className="form-group relative mb-4" data-te-input-wrapper-init>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-input peer block min-h-[auto] w-full rounded-lg border border-gray-400 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none"
                    id="password-login"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="password-login"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500"
                  ></label>
                </div>
                <div className="form-group mb-12 pt-1 pb-1 text-center">
                  <button
                    id="outlineBox"
                    className="login-form btn bg-gradient-to-tr from-[#241868] to-[#392B43]  btn-primary mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="submit"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    style={{
                      background: 'linear-gradient(to right, #392B43, #ADADAD)',
                    }}
                  >
                    Log in
                  </button>
                </div>
              </form>

            )}
             {error && (
              <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
