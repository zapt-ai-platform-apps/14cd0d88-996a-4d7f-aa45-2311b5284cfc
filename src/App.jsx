import React from 'react';
import QuestionSection from './QuestionSection';
import ImageSection from './ImageSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-6 px-4 shadow-md">
        <h1 className="text-3xl font-bold">Welcome to New App</h1>
        <p className="mt-2 text-lg">Ask any question or generate AI images with our advanced model.</p>
      </header>
      <main className="flex-1 p-4 flex flex-col md:flex-row gap-4">
        <QuestionSection />
        <ImageSection />
      </main>
      <footer className="bg-gray-200 text-gray-700 py-3 px-4 text-center">
        <span>Made on </span>
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">
          ZAPT
        </a>
      </footer>
    </div>
  );
}

export default App;