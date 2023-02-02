import { useState } from 'react'
import './App.css';
import data from './data.js'; // coming from database
import Card from './components/card'

function App() {

  // first is state variable, second is setter function (to change state)
  const [cardContentArray, setCardContentArray] = useState(data);
  console.log({cardContentArray});
  // user adds new card content
  let newContent = {
    img:
      "https://images.unsplash.com/photo-1536514072410-5019a3c69182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    title: "new Place",
    text:
      "This was one of the most amazing places I've ever seen. A must see for eveyrone",
    url: "https://unsplash.com/s/photos/santorini"
  }
  // add to application state, then send to Mongodb

  setTimeout(() => {
    setCardContentArray(
      [...cardContentArray, newContent]
    )
  }, 3000)
  
  

  // STATE HERE
  // examples of state:
  // 1. array of data from Mongodb
  // 2. string name typed into app by user
  // 3. number of clicks the user has made
  // 4. true/false value for if user want's dark mode
  // 5. string for type of language for site

  // mongodb call to get initial data
  // when data comes, setState to data
  // mongoDB call WILL HAPPEN EVERY RERENDER

  const countSiteVisits = () => {
    // edit database to show one more site visit (+1)

  }
  countSiteVisits() //+1 site visit in MongoDB
  let cardArray = data.map((obj, index) => {
    return (
      <Card obj={obj} key={index}/> 
    )
  });


  return (
    <div className="App">
      <h1>New App</h1>
      <input />
      <section className="cards">
        {cardArray}
      </section>
    </div>
  );
}

export default App;
