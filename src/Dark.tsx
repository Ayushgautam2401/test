import React, { Fragment, useState } from 'react'
const Dark = () => {
  const [andhera, setAndhera] = useState(false);
  
  const kala={
    backgroundColor: andhera?'#333':'#fff',
    color: andhera?'#fff':"#333"
  }
  return (
    <div style={kala}>
      hideText
      <button onClick={()=> setAndhera(pre=>!pre)}>jadu kaka jadu</button>
    </div>
  )
}

export default Dark