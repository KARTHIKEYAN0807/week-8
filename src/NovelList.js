import React from 'react';

function NovelList({ novels, onSelect, onAdd }) {
  return (
    <div>
      <h2>Novel List</h2>
      <button onClick={onAdd}>Upload New Novel</button>
      <ul>
        {novels.map((novel, index) => (
          <li key={index} onClick={() => onSelect(novel)}>
            {novel.title} by {novel.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NovelList;
