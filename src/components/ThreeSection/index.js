import React from 'react';
import './styles.css';
import Parallax from '../Parallax';
import test from '../../assets/images/test.png'

function threeSec() {
return (
<div className="main">
<div className="container">
<div className="about"><h3>Hello, I'm</h3>
<h1>THOMAS</h1>
<p>A 35 year old male from Burleigh Heads. I am currently working as a Content Creator, however after completing a certificate in Full Stack Development at The University of Adelaide, I am looking to move into the Software / Web engineering space to further my skills in the industry. </p>
<div className="IconContainer">
<div className="gh"><a href="https://github.com/skipsterling"><i class="fa-brands fa-github"></i></a></div>
<div className="li"><a href="https://www.linkedin.com/in/tom-james-4893b2120/"><i class="fa-brands fa-linkedin"></i></a></div>
<div className="email"><a href="https://docs.google.com/document/d/1YjPb1Y0DWoKn67EPxSNaBEMSUznZqhgfkuiJ0_xLVCY/edit"><i class="fa-regular fa-envelope"></i></a></div></div>
</div>
<div className="box2">
<img className='testImg'src={test} alt={test}/>
</div>

<div className="box3">
<Parallax />
</div>
</div>
</div>


);
}

export default threeSec;
