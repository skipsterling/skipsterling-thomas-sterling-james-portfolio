import {
    MouseParallaxChild,
    MouseParallaxContainer
    } from "react-parallax-mouse";
    
    import img1 from '../../assets/images/react.png';
    import img2 from '../../assets/images/mdb.png';
    import img3 from '../../assets/images/njs.png';
    import img4 from '../../assets/images/exp.png';
    
    export default function parallax() {
    return (
    <>
    <div
    style={{
    height: "50%",
    background: "#f2f4f5"
    }}
    >
    <div
    style={{
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    }}
    >
    <MouseParallaxContainer
    className="parallax"
    containerStyle={{
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    }}
    globalFactorX={0.3}
    globalFactorY={0.3}
    resetOnLeave
    >
    <MouseParallaxChild
    factorX={0.6}
    factorY={0.1}
    style={{
    backgroundPositionY: "50%",
    transform: "scale(1.2)",
    position: "absolute",
    filter: "blur(4px) brightness(50%)",
    backgroundSize: "auto",
    backgroundRepeat: "repeat",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden"
    }}
    />
    <MouseParallaxChild
    factorX={0.5}
    factorY={0.5}
    style={{
    filter: "invert(1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
    }}
    >
    <img height="50%" src={img1} alt="" />
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.7}
    factorY={0.5}
    style={{
    filter: "invert(1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
    }}
    >
    <img height="50%" src={img2} alt="" />
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.9}
    factorY={0.5}
    style={{
    filter: "invert(1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
    }}
    >
    <img height="50%" src={img3} alt="" />
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.7}
    factorY={0.5}
    style={{
    filter: "invert(1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
    }}
    >
    <img height="50%" src={img4} alt="" />
    </MouseParallaxChild>
    <MouseParallaxChild
    factorX={0.5}
    factorY={0.5}
    style={{
    filter: "invert(1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "100%"
    }}
    >
    </MouseParallaxChild>
    </MouseParallaxContainer>
    </div>
    </div>
    </>
    );
    }