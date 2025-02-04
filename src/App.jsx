import React from 'react';
import QuestionSection from './features/question/QuestionSection.jsx';
import ImageSection from './features/image/ImageSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-8 px-6 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
            Welcome to Mind Freedom.AI
          </h1>
          <p className="mt-4 text-xl">
            Unleash your mind with AI-driven insights and boundless creativity.
          </p>
        </div>
      </header>
      <main className="flex-1 p-4 flex flex-col md:flex-row gap-4">
        <QuestionSection />
        <ImageSection />
      </main>
      <footer className="bg-gray-200 text-gray-700 py-3 px-4 text-center">
        <span>Made on </span>
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline cursor-pointer"
        >
          ZAPT
        </a>
      </footer>
    </div>
  );
}

export default App;