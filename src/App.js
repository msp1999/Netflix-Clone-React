import React from 'react';
import Row from './Row'
import './App.css';
import requests from './request'

function App() {
  return (
    <div className="App">
       <Row title="NETFLIX ORIGNALS" fetchUrl = {requests.fetchNetflixOrignals} />
       <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
    </div>
  );
}

export default App;
