import React, {useState} from "react";
import InputValue from "./InputValue";

function App() {
  const [items, setItems] = useState([]);

  function addItem(text){
    setItems( (prevValue => {       // Updating the items with the help of objects in which text value we are storing 
      return [...prevValue, text];
    }));

    // Value after submitting will be empty
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      
      <InputValue OnAdd={addItem} />
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;






// const [items, setItems] = useState([]);

//   function addItem(inputText) {
//     if(inputText != " "){
//     setItems(prevItems => {
//       return [...prevItems, inputText];
//     });
//   }
//   }

//   function deleteItem(id) {
//     setItems(prevItems => {
//       return prevItems.filter((item, index) => {
//         return index !== id;
//       });
//     });
//   }