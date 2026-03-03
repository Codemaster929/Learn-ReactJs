import React from 'react'

const App = () => {
  function scroll(val){
    if(val>1){
console.log('scrolling down!!');
    }
    else{
      console.log('scrolling up!!');
      
    }
    
  }
  return (
    <div onWheel={(elem)=>{
    scroll(elem.deltaY)
      
    }}>
      <div className="page1"> </div>
      <div className="page2"></div>
      <div className="page3"></div>
      
    </div>
  )
}

export default App
