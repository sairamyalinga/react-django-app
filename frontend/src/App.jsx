/* eslint-disable no-unused-vars */
import './components/Header'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const getData = () => {
    axios
      .get("http://127.0.0.1:8000/api/recipes/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong");
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Header data={data} getData={getData}/>
    <Dashboard data={data} getData={getData}/>
     
    </>
  )
}

export default App
