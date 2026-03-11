// import React from 'react'

// const App = () => {
  
//   localStorage.setItem('user','sahaj asim');
//   localStorage.setItem('age','22');
//   localStorage.setItem('city','gorakhpur');
//   localStorage.removeItem('city')
//   const username= localStorage.getItem('user')
//   console.log(username);
  
//   // localStorage.clear()
//   sessionStorage.setItem('phase1','hello there ')
//   // sessionStorage.clear()
  
//   return (
//     <div>
//   app  
//     </div>
//   )
// }

// export default App

//////////////////////

// import React from 'react'

// const App = () => {
 
//   // if i have to store a array or obj--
//   const user={
//    'username':'sahaj asim',
//    'city':'gorakhpur',
//    'age':22
//   }
  
//   // localStorage.setItem('userobj',user) // doing so save only an obj name , nothing can be viewed or used 
//   localStorage.setItem('userobj',JSON.stringify(user))
  
// const userdata=  localStorage.getItem('userobj')
//   console.log(userdata)
//   console.log(typeof(userdata));
//   // can not be used , so change it using json.parse -
//     console.log(JSON.parse(userdata));
  
  
  
  
//   return (
//     <div>
//       app
//     </div>
//   )
// }

// export default App

//////////////////////////////////

import React from 'react'
const users=[
  {
username:'sahaj',
city:'gkp',
age:22
},
{
  username:'sarthak',
  city:'lkn',
  age:21
},
{
username:'devesh',
city:'kanpur',
age:20
}]

localStorage.setItem('userdata',JSON.stringify(users))

const usersData=localStorage.getItem('userdata')
const newdata=(JSON.parse(usersData));
console.log(newdata[0].username);
console.log(newdata[1].username);
console.log(newdata[2].username);






const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
