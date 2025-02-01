import React from "react";

function App() {
  var [name, setName] = React.useState("");
  var [x, setX] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setX(name);
  }

  return (
    <div className="container">
      <h1>Hello {x}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
