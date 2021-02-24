import React from 'react'
import birds from './BirdsInfo'
import './birds.css'

function Birds() {
    const createImg = birds.map((item) => {
        return (
          <div className="birds-container"key={item.id}>
                <h2 className='bird-alt'>{item.alt}</h2>
                <hr></hr>
               <p className='bird-title' >{item.title}</p>
               <hr></hr>
             <a href='https://www.dogbreedinfo.com/cat/cats.htm' className='link'>{item.link}</a>
             <hr></hr>
               
               
              <img key={item.id} src={item.src} className={item.class}></img>
              <hr></hr>
            
          </div>
        );
      });
      return <div className="birds-info-container"> {createImg}</div>;
}

export default Birds
