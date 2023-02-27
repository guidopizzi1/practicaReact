import "./App.css";

function App() {
  const handleClick = () => {
    alert("Click");
  }
  return (
    <div>
      <h1>Hola Mundo</h1>
      <ul>
        <li>Guido</li>
        <li>28 años</li>
        <li>Pizzinato</li>
      </ul>
      <button onClick ={handleClick}>Click me</button>
    </div>
  );
}

export default App;
