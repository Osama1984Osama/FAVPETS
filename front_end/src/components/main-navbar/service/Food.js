 import React from "react";
import "./food.css";
function Food() {
  return (
    <div className="food-container">
      <div className="sub-food">
        <div className="para">
          <h1>Raw pet foods can make pets and people sick</h1>
          {/* <img className='arrow' src="/img/arrow.png"></img> */}
          <hr></hr>
          <p>
            Favpets does not recommend feeding raw diets to pets. Germs like
            Salmonella and Listeria bacteria have been found in raw pet foods,
            even packaged ones sold in stores. These germs can make your pets
            sick. Your family also can get sick by handling the raw food or by
            taking care of your pet.
          </p>
        </div>
        <div className="food-image">
          <img src="/img/raw-food.jpg"></img>
        </div>
      </div>

      <div className="sub-food">
        <div className="para">
          <h1> What about dry and canned pet food?</h1>
          {/* <img className='arrow' src="/img/arrow.png"></img> */}
          <hr></hr>
          <p>
            Dry and canned pet food also can be contaminated with germs. Before
            making any changes to your pet’s diet, talk with your veterinarian.
          </p>
        </div>
        <div className="food-image">
          <img src="/img/dry-raw.jpg"></img>
        </div>
      </div>

      <div className="sub-food">
        <div className="para">
          <h1> Tips to stay healthy while feeding your pet</h1>
          {/* <img className='arrow' src="/img/arrow.png"></img> */}
          <hr></hr>
          <ol>
            <li>
              Always wash your hands with soap and water right after handling
              pet food or treats; this is the most important step to prevent
              illness.
            </li>
            <li>
              When possible, store pet food and treats away from where human
              food is stored or prepared and away from reach of young children.
            </li>
            <li>
              Don’t use your pet’s feeding bowl to scoop food. Use a clean,
              dedicated scoop, spoon, or cup.
            </li>
            <li>
              Always follow any storage instructions on pet food bags or
              containers.
            </li>
          </ol>
        </div>
        <div className="food-image">
          <img src="/img/kid.jpg"></img>
        </div>
      </div>

      <div className="sub-food">
        <div className="para">
          <h1> Children and pets </h1>
          {/* <img className='arrow' src="/img/arrow.png"></img> */}
          <hr></hr>
          <ol>
            <li>
              Young children are at risk for illness because their immune
              systems are still developing and because they are more likely than
              others to put their fingers or other items into their mouths.
            </li>
            <li>
              Children younger than 5 years old should not touch or eat pet
              food, treats, or supplements.
            </li>
            <li>Adults should supervise young children when washing hands.</li>
          </ol>
        </div>
        <div className="food-image">
          <img src="/img/kids.jpg"></img>
        </div>

      </div>

    </div>
  );
}

export default Food;



