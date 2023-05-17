import React, { useState } from 'react'

import './style.scss'

function Checked() {
  const [show, setShow] = useState(false);
  const click= ()=>{
    setShow(!show)
  }
  return (
    <>
    <div className='line'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi impedit aliquid quam natus nobis veniam quidem quia nemo? Natus error, eaque corrupti quam ut at? Et rerum in incidunt cumque? hhhhhhhhhhh
      h  jh hwakfnsaf   <button onClick={click}>Show me batman</button>
      <span>{show && <>Nooooooooooooooooooooooooooooo</>}</span>
    </div>
  
    </>
  )
}

export default Checked