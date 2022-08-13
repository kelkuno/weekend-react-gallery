import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


function App() {

    useEffect(() =>{
      fetchGallery();
    }, []);

    const [galleryList, setGalleryList] = useState([]);

    const fetchGallery = () => {
      axios({
        method: 'GET',
        url: '/Gallery/'
      }).then ( response => {
        console.log('data from GET', response);
        setGalleryList(response.data);
      }).catch( err => {
        console.log('client GET', err);
      })
    }//end of fetchGallery

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
        fetchGallery={fetchGallery}
        galleryList={galleryList}
        />
      </div>
    );
} //end of App Function

export default App;
