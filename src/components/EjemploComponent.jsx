import { useEffect, useLayoutEffect, useState, useRef } from "react"

export const EjemploComponent = () => {

    const [mostrar, setMostrar] = useState(false);

    const caja = useRef();
    const boton = useRef();

    useLayoutEffect(()=>{
        console.log("useLayoutEffect: Componente montado!");
    },[]);
    
    useEffect(()=>{
        console.log("useEffect: Componente montado!");

        if(caja.current == null) return;

        const { bottom } = caja.current.getBoundingClientRect();

        caja.current.style.marginTop = `${bottom + 45}px`;

    },[mostrar]);

  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>

        <button onClick={()=>setMostrar(!mostrar)} ref={boton}>Mostrar / Ocultar</button>
        
        {mostrar && (
            <div className="caja" ref={caja}>
                Hola, soy una caja
            </div>
        )}
    </div>
  )
}