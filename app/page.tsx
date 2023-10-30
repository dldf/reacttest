// function CountButton() {
//   return (<>
//       <button>+1</button>
//       <div>0</div></>
//   )
// }

"use client" // to keep the example on the client side
import CountButton from './CountButton'

export default function Page() {
    // return <h1>Hello, Next.js!</h1>
    return <>
    <CountButton />
    <CountButton />
    </>
  }