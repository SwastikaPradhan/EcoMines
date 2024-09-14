/**'use client';

import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';

function Header() {
  const { user, isSignedIn } = useUser();
  
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <div className="flex flex-row items-center">
        <span className="text-blue-800 font-bold text-xl">DreamingRealists</span>
      </div>

      {/* Conditional rendering based on sign-in status 
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex space-x-4">
          <Link href='/dashboard'>
            <Button variant="outline" className = "rounded-full font-bold"> 
              Dashboard
            </Button>
          </Link>

          <Link href='/dashboard'>
            <Button className=" rounded-full bg-blue-800 ">
              Get Started
            </Button>
          </Link>

          {/* Additional buttons if needed *
          
        </div>
      )}
    </div>
  );
}

export default Header;
**/

// src/app/_components/Header.jsx

// src/app/_components/Header.jsx

'use client';

import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { Button } from '@/components/ui/button'; // Adjust the path if needed

function Header() {
  const [isSignedIn, setIsSignedIn] = React.useState(false); // Example state for sign-in status

  return (
    <header className='fixed top-0 left-0 w-full p-5 bg-black text-white shadow-md'>
      <div className='flex justify-between items-center'>
        <div className="flex flex-row items-center">
          <span className="font-bold text-xl">EcoMines</span>
        </div>

        {/* Conditional rendering based on sign-in status */}
        {isSignedIn ? (
          <div className="flex space-x-4">
            <Link href='/profile'>
              <Button variant="outline" className="rounded-full font-bold text-white border-white">
                Profile
              </Button>
            </Link>
            <Link href='/logout'>
              <Button className="rounded-full bg-blue-800 text-white">
                Log Out
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link href='/predict'>
              <Button variant="outline" className="rounded-full font-bold text-white border-white">
                Predict
              </Button>
            </Link>
            <Link href='/dashboard'>
              <Button variant="outline" className="rounded-full font-bold text-white border-white">
                Dashboard
              </Button>
            </Link>

            <Link href='/sign-up'>
              <Button className="rounded-full bg-blue-800 text-white">
                Sign Up
              </Button>
            </Link>

            <Link href='/signin'>
              <Button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white">
                Sign In
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
