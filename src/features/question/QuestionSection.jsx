import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { createEvent } from '../lib/supabaseClient.js';

function QuestionSection() {
  const [question, setQuestion] = useState('');
  const [questionAnswer, setQuestionAnswer] = useState('');
  const [questionLoading, setQuestionLoading] = useState(false);

  const handleAskQuestion = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setQuestionLoading(true);
    setQuestionAnswer('');
    console.log('Sending question to AI:', question);
    try {
      await createEvent('ask_question', { question });
      setTimeout(() => {
        const answer = `This is a calculated answer to: "${question}"`;
        console.log('Received answer from AI:', answer);
        setQuestionAnswer(answer);
        setQuestionLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error while asking question:', error);
      Sentry.captureException(error);
      setQuestionLoading(false);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md flex-1">
      <h2 className="text-2xl font-semibold mb-4">Ask a Question</h2>
      <form onSubmit={handleAskQuestion} className="flex flex-col gap-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded box-border"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows="4"
        />
        <button
          type="submit"
          disabled={questionLoading}
          className="bg-blue-600 text-white py-2 px-4 rounded cursor-pointer disabled:opacity-50"
        >
          {questionLoading ? 'Asking...' : 'Ask Question'}
        </button>
      </form>
      {questionAnswer && (
        <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded">
          <h3 className="font-semibold mb-2">Answer:</h3>
          <p>{questionAnswer}</p>
        </div>
      )}
    </section>
  );
}

export default QuestionSection;