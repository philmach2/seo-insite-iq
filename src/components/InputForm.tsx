import React, { useState } from 'react';

const InputForm: React.FC<{ onSubmit: (url: string) => void }> = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-2">Enter URL:</label>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
        placeholder="https://example.com"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default InputForm;
