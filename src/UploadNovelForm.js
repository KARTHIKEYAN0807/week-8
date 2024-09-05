import React, { useState } from 'react';

function UploadNovelForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [summary, setSummary] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, genre, summary, imageURL });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload New Novel</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      <textarea placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} required />
      <button type="submit">Add Novel</button>
    </form>
  );
}

export default UploadNovelForm;
