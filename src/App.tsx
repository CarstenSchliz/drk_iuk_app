import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{textAlign:'center', padding:'2rem'}}>
      <img src="/icons/drk-sprechfunk-icon-192.png" alt="DRK Blitz" style={{width:160}} />
      <h1>DRK IuK Lernmodule</h1>
      <p>Willkommen in der Lern-App der Fachgruppe Information &amp; Kommunikation.</p>
      <button onClick={() => setCount(c => c + 1)}>Klick mich ({count})</button>
    </div>
  )
}
