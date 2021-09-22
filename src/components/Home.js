import React, { useState, useEffect } from "react";



const apiKey = process.env.REACT_APP_NASA_API_KEY;

function Home() {
  const [nasaPhotoData, setNasaPhotoData] = useState(null);
  const [like, setLike] = useState(false);

  useEffect(() => {
    fetchNasaPhoto();

    async function fetchNasaPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`
      );
      const data = await res.json();
      // console.log(data);
      setNasaPhotoData(data);
    }
  }, []);

  if (!nasaPhotoData) return <div />;

  return nasaPhotoData.map((nasaPhotoData) => {
    return (
      <div className='nasa-photo'>
        <h1>{nasaPhotoData.title}</h1>
        {nasaPhotoData.media_type === 'image' ? (
           < img src={nasaPhotoData.url} alt={nasaPhotoData.title} className='photo' />
        ) : (
            <iframe width='420' height='315' src={nasaPhotoData.url} title={nasaPhotoData.title} className='space-video'></iframe> 
        )}
        <p className='date'>{nasaPhotoData.date}</p>
        <p className='explanation'>{nasaPhotoData.explanation}</p>
        <button onClick={()=> setLike((prevState) => !prevState)}> Like: {like ? '❤️' : '🤍'}</button>
      </div>
    );
  });
}

export default Home;
