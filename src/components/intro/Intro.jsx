import { init } from "ityped";
import { useEffect, useRef } from "react";
import './intro.scss'
export const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Traçage de câbles", "Détection", "Réparation"],
    });
  }, []);
  return (
    <div className='intro' id='intro'>
      <div className="left">
      <div className="imgContainer">
        <img src="assets/man.png" alt=""/>
      </div>
      </div>
      <div className="right">
        <div className="wrapper">
        <h2>Réparation de câble chauffant</h2>
          <h1>Depuis 15 ans</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  )
}
