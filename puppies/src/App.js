import {React, useEffect, useState} from 'react'
import axios from 'axios'
import './styles/style.css'

function App() {

  const [pictures, setPictures] = useState([])

  useEffect(() => {
    getPictures();
  }, []);

  const getPictures = async (newColor) => {
    if (newColor) {
      const getPictures = await axios.get(`https://api.unsplash.com/search/photos?query=puppies&client_id=ylSWNXDJ47eR4KQEvqAAv2tg0XNBcjxnbXhAxZIXypw&${newColor}`);
      setPictures(getPictures.data.results)
    } else {
      const getPictures = await axios.get("https://api.unsplash.com/search/photos?query=puppies&client_id=ylSWNXDJ47eR4KQEvqAAv2tg0XNBcjxnbXhAxZIXypw");
      setPictures(getPictures.data.results)
      console.log(getPictures)
    }
  }


  return (
    <>
      <div id="topBar">
        <h1 id="header">What's your favorite dog?</h1>
        <div id="selectColorDiv">
          <label>Select color: </label>
          <select onChange={(e) => getPictures(e.target.value)} id="selectColor">
            <option value="">All</option>
            <option value="color=black_and_white">Black and white</option>
            <option value="color=black">Black</option>
            <option value="color=white">White</option>
            <option value="color=yellow">Yellow</option>
            <option value="color=orange">Orange</option>
            <option value="color=red">Red</option>
            <option value="color=purple">Purple</option>
            <option value="color=magenta">Magenta</option>
            <option value="color=green">Green</option>
            <option value="color=teal">Teal</option>
            <option value="color=blue">Blue</option>
          </select>
        </div>
      </div>
      <div id="content">
        <div id="imagesTable">
          {pictures.map((image) => {
            return (
              <img className="puppyImage" key={image.id} src={image.urls.raw}/>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
