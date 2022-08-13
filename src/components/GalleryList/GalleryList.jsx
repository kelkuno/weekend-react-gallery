import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({fetchGallery, galleryList}){

    return (
        <div>
                {galleryList.map(item =>
                    <GalleryItem 
                    key={item.id}
                    item={item}
                    fetchGallery={fetchGallery}
                    />  
                )}
        </div>
    );
   
}//end of galleryList


export default GalleryList;