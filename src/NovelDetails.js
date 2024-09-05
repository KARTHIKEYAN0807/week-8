import React from 'react';

function NovelDetails({ novel, onBack }) {
  if (!novel) return <div>No novel selected</div>;

  return (
    <div>
      <h2>{novel.title}</h2>
      <p><strong>Author:</strong> {novel.author}</p>
      <p><strong>Genre:</strong> {novel.genre}</p>
      <p><strong>Summary:</strong> {novel.summary}</p>
      <img src={novel.imageURL} alt={novel.title} />
      <button onClick={onBack}>Back to List</button>
    </div>
  );
}

export default NovelDetails;
