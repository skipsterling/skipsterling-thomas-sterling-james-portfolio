import {
    MouseParallaxChild,
    MouseParallaxContainer
  } from "react-parallax-mouse";
  import "./styles.css";
  import img1 from '../../assets/images/react.png';
  import img2 from '../../assets/images/mdb.png';
import img3 from '../../assets/images/njs.png';
import img4 from '../../assets/images/exp.png';

  export default function parallax() {
    return (
      <>
        <div className="d1">
          <div className="d2">
          <div className="innerContainer">
            <MouseParallaxContainer
              className="parallax"
              globalFactorX={0.3}
              globalFactorY={0.3}
              resetOnLeave
            >
             
              <MouseParallaxChild
              className="paraChild"
                factorX={0.6}
                factorY={0.1}/>

              <MouseParallaxChild
              className="paraChild1"
                factorX={0.5}
                factorY={0.5}>
                <img className="img1" height="50%" src={img1} alt="" />
              </MouseParallaxChild>

              <MouseParallaxChild
              className="paraChild2"
                factorX={0.7}
                factorY={0.5}>
                <img height="50%" src={img2} alt="" />
              </MouseParallaxChild>

              <MouseParallaxChild
              className="paraChild3"
                factorX={0.9}
                factorY={0.5}>
                <img height="50%" src={img3} alt="" />
              </MouseParallaxChild>

              <MouseParallaxChild
              className="paraChild4"
                factorX={0.7}
                factorY={0.5}>
                <img height="50%" src={img4} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}>
               
              </MouseParallaxChild>
             
            </MouseParallaxContainer>
            </div>
          </div>
        </div>
      </>
    );
  }