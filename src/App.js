import './App.css';
import img1 from './assets/images/react.png';
import img2 from './assets/images/mdb.png';
import img3 from './assets/images/njs.png';
import img4 from './assets/images/exp.png';

function App() {
return (
<div className="App">
<div className="container">
<div className="about"><h3>Hello, I'm</h3>
<h1>THOMAS</h1>
<p>A 35 year old male from Burleigh Heads. I am currently working as a Content Creator, however after completing a certificate in Full Stack Development at The University of Adelaide, I am looking to move into the Software / Web engineering space to further my skills in the industry. </p>
<div className="IconContainer">
<div className="gh"><i class="fa-brands fa-github"></i></div>
<div className="li"><i class="fa-brands fa-linkedin"></i></div>
<div className="email"><i class="fa-regular fa-envelope"></i></div></div>
</div>
<div className="box2"></div>
<div className="box3">
<img src={img1} alt='react'/>
<img src={img2} alt='mongodg'/>
<img src={img3} alt='node'/>
<img src={img4} alt='express'/>
</div>
</div>
</div>
);
}

export default App;
