import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrapo justify-center bottom-12 inset-x-0 px-2 ">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 rounded-full' style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-full' style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("yellow")}  className='outline-none px-4 rounded-full ' style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setColor("blue")}  className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor("black")}  className='outline-none px-4 rounded-full text-white' style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>setColor("violet")}  className='outline-none px-4 rounded-full' style={{backgroundColor:"violet"}}>violet</button>
          <button onClick={()=>setColor("teal")}  className='outline-none px-4 rounded-full' style={{backgroundColor:"teal"}}>teal</button>
          <button onClick={()=>setColor("grey")}  className='outline-none px-4 rounded-full' style={{backgroundColor:"grey"}}>grey</button>
          <button onClick={()=>setColor("orange")}  className='outline-none px-4 rounded-full' style={{backgroundColor:"orange"}}>orange</button>
        </div>
      </div>


    </div>
  
  )
}

export default App
