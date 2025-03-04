import React, { useState } from 'react';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import UserMessageOne from '../components/Messages/UserMessageOne';
import { useMediaQuery } from 'react-responsive';
import ManoMessage from '../components/Messages/ManoMessage';
import ReubenMessage from '../components/Messages/ReubenMessage';
import JethroMessage from '../components/Messages/JethroMessage';

export default function Messages() {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isMessageSelected, setIsMessageSelected] = useState(false); // New state
  const isSmallScreen = useMediaQuery({ maxWidth: 1023 });
  const navigate = useNavigate();

  const handleMessageClick = (to) => {
    if (isSmallScreen) {
      setIsMessageOpen(true);
      navigate(to);
    }
    setIsMessageSelected(true); // Update state
  };

  const handleBack = () => {
    setIsMessageOpen(false);
    setIsMessageSelected(false); // Reset state
    navigate('/Messages');
  };

  return (
    <div className='flex h-[100vh] w-full '>
      {/* MIDDLE FOR MESSAGES LIST */}
      <div
        className={`w-[100%] md:w-[45%] overflow-y-auto relative no-scrollbar border-r-2 border-gray-900 ${isSmallScreen && isMessageOpen ? 'hidden' : ''
          }`}
      >
        {/* ... (Your message list content) ... */}
        <nav className=" h-auto sticky top-0 z-10  bg-black border-b-2 border-gray-800 ">
          <div className="flex justify-between w-full h-auto p-4 items-center">
            <h1 className='font-bold text-xl'>Messages</h1>

            {/* SETTINGS & MESSAGES ICON */}
            <div className='flex items-center gap-2 '>

              <Link to='/Messages'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
                  <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
                </svg>
              </Link>

              <Link to='/Messages'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
                  <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path>
                </svg>
              </Link>

            </div>
            {/* END FOR SETTINGS & MESSAGES ICON */}
          </div>
        </nav>

        {/* CONTENT (List of messages) */}
        <div className=" ">

          <Link to='UserMessageOne' onClick={() => handleMessageClick('UserMessageOne')}>
            <ManoMessage />
          </Link>


          <Link to='UserMessageTwo' onClick={() => handleMessageClick('UserMessageTwo')}>
            <ReubenMessage />
          </Link>


          <Link to='UserMessageThree' onClick={() => handleMessageClick('UserMessageThree')}>
            <JethroMessage />
          </Link>

        </div>



      </div>
      {/* END FOR MIDDLE FOR MESSAGES LIST */}

      {/* RIGHT SIDE BAR (Nested Route Content) */}
      <div
        className={`w-[100%] md:w-[55%] border-r-3 border-gray-800 overflow-y-auto relative no-scrollbar ${isSmallScreen && isMessageOpen ? 'block' : isSmallScreen ? 'hidden' : 'block'
          }`}

      >
        <nav className=" h-auto sticky top-0 z-10 bg-black ">

          {isSmallScreen && isMessageOpen && (
            <button onClick={handleBack} className='text-white p-2 flex gap-2.5'>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
                <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
              </svg> Back

            </button>
          )}

        </nav>

        {/* CONTENT FOR RIGHT SIDE BAR */}
        <div className="">

        {!isMessageSelected && !isSmallScreen ? (
            <div className="p-11 h-[90vh] w-[80%] m-auto flex  ">
              <div className='justify-center content-center'>
                <h1 className='font-extrabold text-3xl' >Select a message</h1>
                <p className='text-gray-500 text-[16px] font-medium my-2 mb-3.5 text-'>Choose from your existing conversations, start a new one, or just keep swimming.</p>
                <Link to='/Messages'>
                  <div className='bg-blue-500 w-fit p-3 font-bold rounded-full px-9 '>New message</div>
                </Link>
              </div>

            </div>
          ) : (
            <Outlet />
          )}

        </div>

      </div>
      {/* END FOR RIGHT SIDE BAR */}
    </div>
  );
}

