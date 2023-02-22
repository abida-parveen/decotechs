import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div class="flex flex-col h-screen justify-center items-center">
      <div class="text-gray-700 text-center">
        <h1 class="text-6xl font-bold">404</h1>
        <p class="text-xl mt-2 mb-6 font-medium">Oops! Page not found</p>
        <p class="text-gray-600">
          Sorry, but the page you are looking for has not been found. Try
          checking the URL for errors or click the button below to go back to
          the homepage.
        </p>
        <Link 
          to="/"
          class="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
}

export default Error