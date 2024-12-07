import React, { useEffect, useState } from "react";

export const Counter = () => {
  // codigo js

  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);


  useEffect(() => {
    if (!active) return
    const interval = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [active])

  const iniciar = () => setActive(true)
  const pausar = () => setActive(false)
  const reiniciar = () => {
    setActive(false) 
    setTimer(0)
  }

  // codigo html
  return (

    <div className="TheBigBox container-fluid text-center ">
      <div className="allBoxes row row-cols-1 row-cols-sm-2 row-cols-md-6 display-1 text-white">
        <div className="d-flex align-items-center ml-5">{<i className="fa fa-clock fa-lg text-white"></i>}</div>
        <div className="1 box col border fw-bold"><p>{Math.floor(timer / 100000 % 10)}</p></div>
        <div className="2 box col border fw-bold"><p>{Math.floor(timer / 10000 % 10)}</p></div>
        <div className="3 box col border fw-bold"><p>{Math.floor(timer / 1000 % 10)}</p></div>
        <div className="4 box col border fw-bold"><p>{Math.floor(timer / 100 % 10)}</p></div>
        <div className="5 box col border fw-bold"><p>{Math.floor(timer / 10 % 10)}</p></div>
        <div className="6 box col border fw-bold"><p>{Math.floor(timer % 10)}</p></div>
      </div>

      {/* Botones  */}
      <div className="container col p-2 mt-5">
        <button onClick={reiniciar} type="button" class="btn btn-danger m-2"><i class="fas fa-redo"></i></button>
        <button onClick={pausar} type="button" class="btn btn-success m-2"><i class="fas fa-pause"></i></button>
        <button onClick={iniciar} type="button" class="btn btn-primary m-2"><i class="fas fa-play"></i></button>
      </div>
    </div>



  );
}