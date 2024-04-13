import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("pink");
  const [color1, setColor1] = useState("yellow");

  return (
    <div className='flex'> 
    <img src="../../C:/Users/iamit/Downloads/building.avif" alt="" />
    <div className='w-1/2 h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 left-1/4 -translate-x-1/2'>
        <div className='flex px-4 py-3 bg-white rounded-full gap-4'>
          <button className="px-4 py-2 rounded-full text-black font-bold shadow-md" onClick={() => setColor("pink")} style={{backgroundColor: "pink"}}>Pink</button>
          <button className="px-4 py-2 rounded-full text-white font-bold shadow-md" onClick={() => setColor("purple")} style={{backgroundColor: "purple"}}>Purple</button>
          <button className="px-4 py-2 rounded-full text-black font-bold shadow-md" onClick={() => setColor("lavender")} style={{backgroundColor: "lavender"}}>Lavender</button>
        </div>
      </div>
    </div>
    <div className='w-1/2 h-screen duration-200' style={{backgroundColor: color1}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 px-2 right-1/4 translate-x-1/2'>
        <div className='flex px-4 py-3 bg-white rounded-full gap-4'>
          <button className="px-4 py-2 rounded-full text-white font-bold shadow-md" onClick={() => setColor1("blue")} style={{backgroundColor: "blue"}}>Blue</button>
          <button className="px-4 py-2 rounded-full text-white font-bold shadow-md" onClick={() => setColor1("purple")} style={{backgroundColor: "purple"}}>Purple</button>
          <button className="px-4 py-2 rounded-full text-black font-bold shadow-md" onClick={() => setColor1("lavender")} style={{backgroundColor: "lavender"}}>Lavender</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App 