import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Register from './components/Register';
import Header from './components/Header';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Login from './components/Login';
import Table from './components/Table';


function App() {
  const [message, setMessage] = useState("");
  const [token, setToken] = useContext(UserContext)

  const getWelcomeMessage = async () =>{
    const requestsOptions = {
      method:"GET",
      Headers:{
        "Content-Type":"application/json"
      }
    }
    const response = await fetch("/api", requestsOptions);
    const data = await response.json();
    
    if (!response.ok){
      console.log("something messed up")
    }
    else{
      setMessage(data.message)
    }
  };
  
  useEffect(()=>{
    getWelcomeMessage();
  },[])
  return (
    <div className="App">
      <Header title={message}/>
      <div className="columns">
      <div className="column"></div>
      <div className="column m-5 is-two-thirds">
        {
          !token ? (
            <div className="columns">
              <Register/><Login/>
            </div>
          ) :
          (
          <Table></Table>
          )
        }
      </div>
      <div className="column"></div>
      </div>
    </div>
  );
}

export default App;
