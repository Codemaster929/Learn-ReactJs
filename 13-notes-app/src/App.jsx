import React, { useState } from 'react'

const App = () => {


  const [task, settask] = useState([])


  const submitted = (e) => {
    e.preventDefault();
    console.log('form Submitted ');
    setdetails('')
    settitle('')
    const copytask = [...task]
    copytask.push({ title, details })
    settask(copytask)
    console.log(copytask);

  }
  const [details, setdetails] = useState("")
  const inputDetails = (delts) => {
    setdetails(delts);
    console.log('typing in details');

  }

  const [title, settitle] = useState("")
  const inputvalue = (val) => {
    settitle(val)
  }



  return (

    <div className='bg-black lg:h-screen w-screen '>
      <div className=' flex lg:flex-row flex-col  h-full w-full gap-10'>
        <form onSubmit={(e) => {
          submitted(e)
        }} className='flex flex-col gap-5 lg:w-1/2 p-10'>
          <h1 className='text-white text-3xl font-bold '>Create Notes</h1>
          <input
            type="text"
            placeholder='Enter notes heading ' value={title}
            className='font-semibold text-white h-20 w-full border-3 border-white rounded   px-2'
            onChange={(e) => {
              console.log('typing');

              inputvalue(e.target.value)
            }} />
          <textarea
            placeholder='Enter details here '
            className='font-semibold text-white h-40 w-full border-3 border-white rounded px-2 py-2'
            value={details}
            onChange={(e) => {
              inputDetails(e.target.value)
            }}
          >

          </textarea>
          <button className='text-black font-bold bg-white h-20 lg:w-full rounded border-white active:bg-gray-300 active:scale-95'>Add</button>
        </form>
        <div className="bg-gray-900 p-10 h-full lg:w-1/2 rounded lg:border-l-white border-l-2 ">
          <h1 className='text-white text-3xl  px-2 py-2 font-bold mb-2'>Recent Notes</h1>
          <div 
          className='flex p-5 flex-wrap h-[82vh] w-full gap-7 scroll-auto overflow-auto  justify-center  [&::-webkit-scrollbar] :hidden '
          >
            <div>
              <img src="/home/sahajasim/Downloads/sticky_note_sticker.png" alt="" />
            </div>
            {task.map((element,key) => {
              return (
              <div key={key} className="h-50 w-40 bg-white p-2 rounded ">
                <h1 className='font-bold px-2 h-10'>{element.title}</h1>
                <p className='h-37 px-2 text-gray-500 overflow-auto  [&::-webkit-scrollbar]:hidden '>{element.details}</p>
              </div>
               )
            })}

          </div>
        </div>
      </div>


    </div>
  )

}

export default App
