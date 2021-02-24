import React from 'react'
import cats from './CatsInfo'
import './cats.css'

function Cats() {
 

    const createImg = cats.map((item) => {
      return (
        <div className="cats-container"key={item.id}>
              <h2 className='cat-alt'>{item.alt}</h2>
             <p className='cat-title' >{item.title}</p>
           <a href='https://www.dogbreedinfo.com/cat/cats.htm' className='link'>{item.link}</a>
             
             
            <img key={item.id} src={item.src} className={item.class}></img>
          
        </div>
      );
    });
    return <div className="cats-info-container"> {createImg}</div>;
  }
  
export default Cats