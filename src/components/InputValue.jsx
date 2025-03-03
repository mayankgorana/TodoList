import React, { useState } from "react";

function InputValue(props) {
  const [text, addText] = useState("");

  function handleText(event) {
    const newvalue = event.target.value; // Accessing the value
    addText(newvalue); // Update the text through addText
  }

  return (
    <div className="form">
      <input onChange={handleText} type="text" value={text} />
      <button
        onClick={() => {
          props.OnAdd(text);
          addText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputValue;
