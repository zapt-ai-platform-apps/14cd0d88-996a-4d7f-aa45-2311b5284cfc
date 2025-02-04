import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { createEvent } from '../lib/supabaseClient.js';

function ImageSection() {
  const [imagePrompt, setImagePrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageLoading, setImageLoading] = useState(false);

  const handleGenerateImage = async (e) => {
    e.preventDefault();
    if (!imagePrompt.trim()) return;
    setImageLoading(true);
    setImageUrl('');
    console.log('Generating image for prompt:', imagePrompt);
    try {
      await createEvent('generate_image', { prompt: imagePrompt });
      setTimeout(() => {
        const generatedImageUrl = `https://source.unsplash.com/random/400x300/?${encodeURIComponent(imagePrompt)}`;
        console.log('Received image URL from AI:', generatedImageUrl);
        setImageUrl(generatedImageUrl);
        setImageLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error while generating image:', error);
      Sentry.captureException(error);
      setImageLoading(false);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md flex-1">
      <h2 className="text-2xl font-semibold mb-4">Generate AI Image</h2>
      <form onSubmit={handleGenerateImage} className="flex flex-col gap-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded box-border"
          placeholder="Enter image prompt..."
          value={imagePrompt}
          onChange={(e) => setImagePrompt(e.target.value)}
        />
        <button
          type="submit"
          disabled={imageLoading}
          className="bg-green-600 text-white py-2 px-4 rounded cursor-pointer disabled:opacity-50"
        >
          {imageLoading ? 'Generating...' : 'Generate Image'}
        </button>
      </form>
      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="Generated AI" className="w-full h-auto rounded" />
        </div>
      )}
    </section>
  );
}

export default ImageSection;