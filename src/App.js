import React, { useState, useEffect } from 'react';
import UploadNovelForm from './UploadNovelForm';
import NovelList from './NovelList';
import NovelDetails from './NovelDetails';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [novels, setNovels] = useState([]);
  const [selectedNovel, setSelectedNovel] = useState(null);

  // Load novels from localStorage when the component mounts
  useEffect(() => {
    const savedNovels = JSON.parse(localStorage.getItem('novels')) || [];
    setNovels(savedNovels);
  }, []);

  // Save novels to localStorage whenever the novels state changes
  useEffect(() => {
    localStorage.setItem('novels', JSON.stringify(novels));
  }, [novels]);

  return (
    <div className="App">
      {view === 'home' && <NovelList novels={novels} onSelect={setSelectedNovel} onAdd={() => setView('upload')} />}
      {view === 'upload' && <UploadNovelForm onSubmit={(novel) => {
        setNovels([...novels, novel]);
        setView('home');
      }} />}
      {view === 'details' && <NovelDetails novel={selectedNovel} onBack={() => setView('home')} />}
    </div>
  );
}

export default App;
