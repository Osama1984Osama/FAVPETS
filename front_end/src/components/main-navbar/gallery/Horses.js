import React from 'react'
import horses from './HorsesInfo'
import './horses.css'

function Horses() {
    const createImg = horses.map((item) => {
        return (
          <div className="horses-container" key={item.id}>
                <h2 className='horse-alt'>{item.alt}</h2>
               <p className='horse-title' >{item.title}</p>
             <a href='https://www.dogbreedinfo.com/cat/cats.htm' className='link'>{item.link}</a>
               
               
              <img key={item.id} src={item.src} className={item.class}></img>
            
          </div>
        );
      });
      return <div className="horses-info-container"> {createImg}</div>;
}

export default Horses
