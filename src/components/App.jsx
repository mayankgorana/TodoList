import React, {useState} from "react";
import InputValue from "./InputValue";
import Todoitem from "./Todoitem";

function App() {
  const [items, setItems] = useState([]);

  function addItem(text){
    if (text.trim() === "") return;
    setItems( (prevValue => {       // Updating the items with the help of objects in which text value we are storing 
      return [...prevValue, text];
    }));
  }

  function deleteItem(id){
    setItems( (prevItems => {
      return prevItems.filter( (items, index) => {
        return index !== id;
      });
    }));
  } 

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      
      <InputValue OnAdd={addItem} />
      <div>
        <ul>
          {items.map((toItem, index) => (
            <Todoitem 
              key = {index}
              id = {index}
              text = {toItem}
              onChecked = {deleteItem}
            />
          ))}
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