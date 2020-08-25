import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['Captain America', 'Iron man', 'Thor', 'Loki'];

  const products = [
    {name: "Iphone 11 Pro Max", price:"$799" },
    {name: "One Plus 8", price:"$399" },
    {name: "Samsung S20", price:"$599" }
  ]
  
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>

        <Users></Users>
        <ul>
          {
            heros.map(hero => <li>{hero}</li>)
          }
          
          {
           
            products.map( pd => <li>{pd.name}</li> )
            
          }
        </ul>

        {
          products.map( pd => 
            <Product productInfo={pd}></Product>
            )
        }
        {/* <Product productInfo={products[0]}></Product>
        <Product productInfo={products[1]}></Product>
        <Product productInfo={products[2]}></Product> */}
       <Person name={heros[0]} city="Brooklyn"></Person>
       <Person name={heros[1]} city="New York"></Person>
       <Person name={heros[2]} city="Asgard"></Person>
       <Person name={heros[3]} city="Jotunheim"></Person>
       <Person name="BatMan" city="Gotham"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  
  useEffect( () =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data)) 
  },[])

  return(
    <div>
      <h2>Dynamic Users:{users.length}</h2>
      <ul>
        {
          users.map(user => <div><li>Name: {user.name}</li> <li>Email: {user.email}</li><br></br></div> )
        }

      </ul>
    </div>
  )
}



function Counter(){
  const [count, setCount] = useState(10);
  
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button> 
    </div> 
  )
}


function Product(props){

  const productStyle = {
    border: "3px solid red",
    backgroundColor: "gray",
    margin: "10px",
    padding: "10px",
    width: "300px",
    float: "left"
  }
  const {name, price} = props.productInfo;
  
  
  return(
    <div style={productStyle}>
      <h4> {name}</h4>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border: "2px solid red", margin: "10px", padding: "20px"}}>
      <h1>Name: {props.name}</h1>
      <h2>City: {props.city}</h2>
    </div>
  )
}
export default App;
