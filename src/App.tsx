import { useState } from 'react'
import './App.css'
import LessComponent from './lessComponents'
import ScssComponent from './sassComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  这是一个页面
  <p>count:{count}</p>
  <button onClick={()=>setCount(count+1)}> + </button>
  <button onClick={()=>setCount(count-1)}> - </button>
  <div>
    less组件:
    <LessComponent/>
  </div>
  <div>
    scss组件:
    <ScssComponent/>
  </div>
    </>
  )
}

export default App
