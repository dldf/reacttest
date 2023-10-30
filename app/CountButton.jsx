// export default function CountButton() {
//     return (<>
//         <button>+1</button>
//         <div>0</div></>
//     )
// }
// // the old way, instead of export default function above:
// export default CountButton

//function handleClick() { alert('Handle it.') }

// function handleClick() {
//     count++
// }
// let count = 77              // 1. count variable
// export default function CountButton() {
//     return (<>
//         <button onClick={handleClick}>+1</button>     {/* 2. onClick (add "use client" to page.tsx) */}
//         <div>{count}</div></>   // 1. JS data informs JSX view
//     )
// }

// import { useState } from "react"
// export default function CountButton() {
//     // let count = 0 
//     let [count, setCount] = useState(0)
//     function handleClick() {
//         // count++
//         setCount(count + 1) // ++count also works (not count++)
//     }
//     return (<>
//         <button onClick={handleClick}>+1</button>
//         <div>{count}</div></>
//     )
// }

import { useState, useEffect } from "react"
export default function CountButton() {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(++count)
    }
    function rollOverCount(){
        if (count > 10) {
            setCount(0)
        }
    }
    useEffect(rollOverCount,[count])
    return (<>
        <button onClick={handleClick}>+1</button>
        <div>{count}</div></>
    )
}
