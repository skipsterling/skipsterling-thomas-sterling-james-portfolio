import React from 'react';
import './styles.css';

function threeSecTwo() {
    return (
        <div className="App">
            <div className="container">
                <div className="cardOne" >
                    {/* Image is just a placeholder */}

                    <h3 className="c1h3">Content Creator Portfolio</h3>
                    <div className="buttonContainer">
                     
                        <a href="https://www.visualsbythomas.com" target="_blank" rel="noreferrer"> 
                        <button className="appButton">App</button></a>
                    </div>
                </div>

                <div className="cardFour">
                    <h3 className="c1h3">Client Website</h3>
                    <div className="buttonContainer">
                    <a href=" https://www.rjpodiatry.com.au/" target="_blank" rel="noreferrer"> 
                        <button className="appButton">App</button></a>
                    </div>
                </div>

                <div className="cardTwo">
                    <h3 className="c1h3">Weather API</h3>

                    <div className="buttonContainer">
                   
                        <a href="https://skipsterling.github.io/homework-week6/" target="_blank" rel="noreferrer"> 
                        <button className="appButton">App</button></a>
                    </div>
                </div>

                <div className="cardThree">
                    <h3 className="c1h3">Day Scheduler</h3>
                    <div className="buttonContainer">
                    <a href=" https://skipsterling.github.io/homework-week5/" target="_blank" rel="noreferrer"> 
                        <button className="appButton">App</button></a>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default threeSecTwo;