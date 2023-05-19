import React from 'react'
import '../index.css';
import Harrison from '../assets/Harrison.jpg';
import Tanvir from '../assets/Tanvir.jpg';
import Ricardo from '../assets/Ricardo.jpg';
import Ray from '../assets/Ray.jpg';


const OurTeam = () => {
    return (
        <div>
            <section className='outterContainer' id='ourTeamSection'>
                <div className="ourTeamContainer">
                    <div>
                        <h1>Our Team</h1>
                        <br></br>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                            dignissim tortor sed do eiusmod tempor incididunt ut labore.
                        </h2>

                        <div className='ourTeam'>

                            <div className="card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-end px-4 pt-4" />
                                <div className="flex flex-col items-center pb-10">
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Harrison} alt="Harrison" />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Harrison</h5>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</p>
                                    <div className="flex mt-4 space-x-3 md:mt-6">
                                        <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-end px-4 pt-4" />
                                <div className="flex flex-col items-center pb-10">
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Tanvir} alt="Tanvir" />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Tanvir</h5>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</p>
                                    <div className="flex mt-4 space-x-3 md:mt-6">
                                        <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-end px-4 pt-4" />
                                <div className="flex flex-col items-center pb-10">
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Ricardo} alt="Ricardo" />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ricardo</h5>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</p>
                                    <div className="flex mt-4 space-x-3 md:mt-6">
                                        <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur nauris luctus rutrum.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-end px-4 pt-4" />
                                <div className="flex flex-col items-center pb-10">
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Ray} alt="Ray" />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ray</h5>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</p>
                                    <div className="flex mt-4 space-x-3 md:mt-6">
                                        <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurTeam