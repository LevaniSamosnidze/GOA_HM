import { useState, useEffect } from "react";



function App() {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowText(true)
    }, 1000)
  }, [])  

  return (
    <div>
      <p>{showText ? 'levani' : 'dsad'}</p> 
    </div>
  )
}

export default App
