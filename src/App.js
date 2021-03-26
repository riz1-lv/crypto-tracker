import {useEffect, useState, React} from "react"
import axios from "axios"
import './App.css';



function App() {

  const [coins,setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data)
      console.log(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1>Search a currency</h1>
        <form type="text" placeholder="Search" className="coin-input"></form>
      </div>

      
    </div>
  );
}

export default App;
