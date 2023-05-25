import React from "react";
import LogoOnly from "../assets/LogoOnly.svg";
import { Link, useHistory } from 'react-router-dom';
import AuthService from '../utils/auth'; // Update the path to AuthService

const Navbar = () => {
  const isLoggedIn = AuthService.loggedIn(); // Check if the user is logged in

  const handleLogout = () => {
    AuthService.logout(); // Call the logout method from AuthService
  };

  const navigateToOurTeam = () => {
    const ourTeamSection = document.getElementById('ourTeamSection');
    if (ourTeamSection) {
      ourTeamSection.scrollIntoView({});
    } 
  };

  const navigateToHowItWorks = () => {
    const howItWorksSection = document.getElementById('howItWorksSection');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({});
    } 
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 navbarPricemaAI">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <Link to="/" className="flex items-center">
            <img src={LogoOnly} className='iconOnly' alt='Pricema AI Icon' />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pricema AI</span>
          </Link>
          <div className="flex md:order-2">
            {isLoggedIn ? (
              // Render Logout button if the user is logged in
              <>
                <Link className="btn btn-lg btn-info m-2 hoverButtons font-medium rounded-3xl" to="/me">
                  {AuthService.getProfile().data.username}'s Profile
                </Link>
                <button type="button" onClick={handleLogout} className="text-black bg-white hoverButtons focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
              </>


            ) : (
              // Render Sign In and Signup buttons if the user is not logged in
              <>
                <Link to="/Login">
                  <button type="button" className="spacingButton text-black bg-white hoverButtons focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
                </Link>
                <Link to="/Signup">
                  <button type="button" className="text-white bg-black hoverButtons focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>
                </Link>
              </>
            )}
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="navbarOurTeam flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link to="/#howItWorksSection"><li>
                <div onClick={navigateToHowItWorks} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">How It Works</div>
              </li>
              </Link>
              <Link to="/#ourTeamSection"><li>
                <div onClick={navigateToOurTeam}className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Our Team</div>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;