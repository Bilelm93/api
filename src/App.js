import {useState, useEffect} from 'react'
 

import './App.css';
import GetList from './UserList'
function App() {
const [listOfUSer , setlistOfUSer] = useState([])


useEffect(() => {
 async function fetchuserList(){
   try{
     const requesURL ='https://jsonplaceholder.typicode.com/users' ;
     const response = await fetch(requesURL);
     const responseJSON = await response.json();
     console.log(responseJSON) ;
     setlistOfUSer(responseJSON);
   } catch {}
 }
fetchuserList()
}, [])

  return (
    <div className="App">
      <header className="App-header " >
        <h1>List Of Users</h1>
<GetList listOfUSer={listOfUSer}/>
  
      </header>
    </div>
  );
}

export default App;
