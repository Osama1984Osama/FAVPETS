import React from 'react'
import dogs from './DogsInfo'
import './dogs.css'

function Dogs() {


    const createImg = dogs.map((item) => {
        return (
          
          <div className="dogs-container" key={item.id}>
                <h2 className='dog-alt'>{item.alt}</h2>
               <p className='dog-title' >{item.title}</p>
             <a href='https://www.dogbreedinfo.com/cat/cats.htm' className='link'>{item.link}</a>
               
               
              <img key={item.id} src={item.src} className={item.class}></img>
            
            
          </div>
        );
      });
      return <div className="dogs-info-container"> {createImg}</div>;
}

export default Dogs
