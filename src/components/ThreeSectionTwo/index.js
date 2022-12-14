import React from 'react';
import './styles.css';
import img1 from '../../assets/images/react.png';

function threeSecTwo() {
return (
<div className="App">
<div className="container">
<div className="cardOne">
{/* Image is just a placeholder */}
<img src={img1} alt="react"/>
<h3 className="c1h3">Content Creator Portfolio</h3>
<p>A Content Creator Portfolio I created for myself using my favouite library / technology React.js </p>
<div className="buttonContainer">
<button className="codeButton">Code</button>
<button className="appButton">App</button>
</div>
</div>
<div className="cardTwo">
<img src={img1} alt="react"/>
<h3 className="c1h3">Weather API</h3>
<p>I have created a weather app using the weather API from openweathermap.org </p>
<div className="buttonContainer">
<button className="codeButton">Code</button>
<button className="appButton">App</button>
</div>
</div>

<div className="cardThree">
<img src={img1} alt="react"/>
<h3 className="c1h3">Day Scheduler</h3>
<p>I have created a Daily Scheduler </p>
<div className="buttonContainer">
<button className="codeButton">Code</button>
<button className="appButton">App</button>
</div>
</div>
</div>
</div>


);
}

export default threeSecTwo;
