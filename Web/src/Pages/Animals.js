import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/style.css';
import Bird1 from '../Img/bird1.jpg'
import Bird2 from '../Img/bird2.jpg'
import Bird3 from '../Img/bird3.jpg'
import Chicken from '../Img/chicken.jpg'
import Elephant from '../Img/elephant.jpg'
import Dolphin from '../Img/dolphin.jpg'
import Tiger from '../Img/tiger.jpg'
import Kangourou from '../Img/kangourou.jpg'



function Animals() {
    const [showBirds, setShowBirds] = useState(true);


    const seeMore = () => {
        alert("Go to Google for more information!");
    };

    return (
        <main>

            <h1>Animals Section 🐾</h1>

            <button onClick={() => setShowBirds(true)}>Birds</button>
            <button onClick={() => setShowBirds(false)}>Mammals</button>
            {showBirds &&
                <div id="birds" class="section">

                    <div class="card">
                        <div className='AnimalsPic' style={{ backgroundImage: `url(${Bird1})`, backgroundSize: 'cover' }}></div>
                        <h3>Eagle</h3>
                        <p>Can Fly</p>
                        <button onClick={seeMore}>See More </button>
                    </div>

                    <div class="card">
                        <div className='AnimalsPic' style={{ backgroundImage: `url(${Bird2})`, backgroundSize: 'cover' }}></div>
                        <h3>Parrot</h3>
                        <p>Can Fly</p>
                        <button onClick={seeMore}>See More </button>
                    </div>

                    <div class="card">
                        <div className='AnimalsPic' style={{ backgroundImage: `url(${Bird3})`, backgroundSize: 'cover' }}></div>
                        <h3>Owl</h3>
                        <p>Can Fly</p>
                        <button onClick={seeMore}>See More </button>
                    </div>

                    <div class="card">
                        <div className='AnimalsPic' style={{ backgroundImage: `url(${Chicken})`, backgroundSize: 'cover' }}></div>
                        <h3>Chicken</h3>
                        <p>Cannot Fly</p>
                        <button onClick={seeMore}>See More </button>
                    </div>

                    

                </div>}

            {!showBirds && <div id="mammals" className="section">

                <div className="card">
                    <div className='AnimalsPic' style={{ backgroundImage: `url(${Elephant})`, backgroundSize: 'cover' }}></div>
                    <h3>Elephant</h3>
                    <p>Number of Legs: 4</p>
                    <button onClick={seeMore}>See More </button>
                </div>

                <div className="card">
                    <div className='AnimalsPic' style={{ backgroundImage: `url(${Dolphin})`, backgroundSize: 'cover' }}></div>
                    <h3>Dolphin</h3>
                    <p>Number of Legs: 0</p>
                    <button onClick={seeMore}>See More </button>
                </div>

                <div className="card">
                    <div className='AnimalsPic' style={{ backgroundImage: `url(${Kangourou})`, backgroundSize: 'cover' }}></div>
                    <h3>Kangourou</h3>
                    <p>Number of Legs: 2</p>
                    <button onClick={seeMore}>See More </button>
                </div>

                <div className="card">
                    <div className='AnimalsPic' style={{ backgroundImage: `url(${Tiger})`, backgroundSize: 'cover' }}></div>
                    <h3>Tiger</h3>

                    <button onClick={seeMore}>See More </button>
                </div>



            </div>}

        </main>
    );
}

export default Animals;