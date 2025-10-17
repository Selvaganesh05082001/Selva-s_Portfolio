import React from 'react';
export default function Gallery(){ 
  const images = [
    {src:'/assets/5.webp', caption:'My world begins with my mother'},
    {src:'/assets/2.webp', caption:'Brother - strength beyond words'},
    {src:'/assets/11.webp', caption:'Small wins, big dreams'},
    {src:'/assets/7.jpg', caption:'Peace is my favorite expression'},
    {src:'/assets/4.webp', caption:'Tech in hand, passion in heart'},
    {src:'/assets/3.webp', caption:'Confidence in silence speaks loud'},
    {src:'/assets/8.jpg', caption:'I’m not here to race others'},
    {src:'/assets/9.webp', caption:'Focus defines your journey'},
    {src:'/assets/6.jpg', caption: 'Ride more, worry less'}
  ];
  
  return (
    <section id="gallery" className="card">
      <h3>Gallery</h3>
      <div className="gallery-grid">
        {images.map((im,i)=> (
          <div key={i} className="gallery-item">
            <img src={im.src} alt={im.caption} />
            <div className="gallery-caption">{im.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
