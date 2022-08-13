import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

    useEffect(() =>{
      fetchGallery();
    }, []);

    const fetchGallery = () => {
      axios({
        method: 'GET',
        url: '/Gallery/'
      }).then ( response => {
        console.log('data from GET', response);
      }).catch( err => {
        console.log('client GET', err);
      })
    }//end of fetchGallery

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
} //end of App Function

export default App;
