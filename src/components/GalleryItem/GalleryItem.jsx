import './GalleryItem.css'
import {useState} from 'react';
import axios from 'axios';

function GalleryItem ({item, fetchGallery}){

    const [likes, setLikes] = useState(0);
    const [description, setDescription] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();

        axios({
            method: 'PUT',
            url: `/Gallery/like/${item.id}`
        }).then((response) =>{
            console.log('response:', response.data);
            fetchGallery();
            console.log('item', {item});
        }).catch(function (err){
            console.log('error on add:', err);
        })
    }//end of handleSubmit

    const handleDescription = () => {
        setDescription(!description);
        console.log(description);
    }

    return (
        <div className = "entry">
            <div className="swap" onClick={handleDescription}>
                {description ?
                <p>{item.description}</p> :
                <img src={item.path}/>
                }
            </div>
            <button onClick={handleSubmit} type="button">Love it!</button>
            <p>{item.likes} people like this!</p>
        </div>
    )

}//end of gallery Item

export default GalleryItem