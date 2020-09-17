import React from 'react';
import Row from './Row'
import './App.css';
import requests from './request'
import Banner from './Banner'

function App() {
  return (
    <div className="App">
      <Banner/>
       <Row title="NETFLIX ORIGNALS" fetchUrl = {requests.fetchNetflixOrignals} isLargeRow />
       <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
       <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
       <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
       <Row title="Comedy Movies" fetchUrl = {requests.fetchHorrorMovies} />
       <Row title="Horror Movies" fetchUrl = {requests.fetchDocumentaries} />
       <Row title="Romance movies" fetchUrl = {requests.fetchRomanceMovies} />
       <Row title="Documentries" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
