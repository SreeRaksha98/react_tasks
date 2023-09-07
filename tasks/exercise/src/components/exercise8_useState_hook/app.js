import React, {useState} from "react";
import "./app.css"

function App(){
    const [count, setCount] = useState(4)
    const [theme, setTheme] = useState('')

    function incCount(){
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1)
        setTheme('Incrementing')
    }

    function decCount(){
        // setCount(count - 1)
        setCount(prevCount => prevCount - 1)
        setTheme('Decrementing')
    }
    return(
        <>
            <button onClick={incCount}> +</button>
            <span>{count} {theme}</span>
            <button onClick={decCount}>-</button>
        </>
    )
}

export default App