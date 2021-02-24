import React from "react";
import "./health.css";
function Health() {
  return (
    <div className="health-container">
      
      <div className="sub-health">
      
        <div className='text'>
        <h1>About Pets & People</h1>
        <hr></hr>
          <p>
            There are many health benefits of owning a pet. They can increase
            opportunities to exercise, get outside, and socialize. Regular
            walking or playing with pets can decrease blood pressure,
            cholesterol levels, and triglyceride levels. Pets can help manage
            loneliness and depression by giving us companionship. Most
            households in the United States have at least one pet. Studies have
            shown that the bond between people and their pets can increase
            fitness, lower stress, and bring happiness to their owners. Some of
            the health benefits of having a pet include:
          
          </p>
          <ol>
              <li>Decreased blood pressure</li>
              <li>Decreased cholesterol levels</li>
              <li>Decreased triglyceride levels</li>
              <li>Decreased feelings of loneliness</li>
              <li>Increased opportunities for exercise and outdoor activities</li>
              <li>Increased opportunities for socialization</li>
          </ol>
        </div>
        <div className='image'>
          <img src="/img/Benifits.jpeg"></img>
        </div>
      </div>
     
      <div className="sub-health">
        <div className='text'>
        <h1> Pick the Right Pet</h1>
        <hr></hr>
          <p>
          Before adopting a new pet, make sure that it is the right one for you and your family. Do some research beforehand about the specific needs of the animal. Ask yourself these questions before getting a pet:
          </p>
          <ol>
            <li>How long will this animal live?</li>
            <li>What does the pet eat?</li>
            <li>How much exercise does the pet need?</li>
            <li>How large will it become?</li>
            <li>How much will it cost for veterinary care?</li>
            <li>Do I have enough time to properly care for and clean up after the pet?</li>
            <li>What type of habitat does this pet need to be healthy?</li>
            <li>What type of exercise does this pet need?</li>
            <li>Are pets allowed in my house, apartment, or condominium?</li>
            <li>Are there young children, older people, or people with weak immune systems who will care for or be around the pet?</li>
            </ol>
            <p>Children 5 years of age and younger, people with weakened immune systems, and people 65 years of age and older are more likely to get diseases spread between animals and people (also known as zoonotic diseases). Pregnant women are also at a higher risk for certain animal-related diseases. Before getting a new pet, keep the following in mind:</p>
            <ol>
            <li>Households with children 5 years of age and younger should not have pet reptiles (turtles, lizards, snakes), amphibians (frogs, toads), or backyard poultry because of the risk of serious illness from harmful germs spread between these animals and young children.</li>
            <li>People with weakened immune systems should take extra precautions when choosing and handling pets. Talk to your veterinarian for help picking the best pet.</li>
            <li>Pregnant women should avoid adopting a new cat or handling stray cats, especially kittens. Cats can carry a parasite that causes toxoplasmosis—a disease that can cause birth defects. If you are pregnant, you do not need to give up your current cat, but you should avoid changing cat litter.</li>
            <li>Pregnant women should avoid contact with pet rodents to prevent exposure to lymphocytic choriomeningitis virus, which can cause birth defects. If you’re pregnant and have a pet rodent, avoid direct contact and have someone else clean its habitat.</li>

          </ol>
        </div>
        <div className='image'>
        <img src="/img/right-pet.gif"></img>
        </div>
      </div>
    </div>
  );
}

export default Health;