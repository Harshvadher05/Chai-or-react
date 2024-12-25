import "./App.css";
import Card from "./components/Cards";

function App() {
  const obj = {
    name: "harsh",
    age: 21,
  };
  const obj2 ={
    name:"xyz",
    age:20
  }

  return (
    <>
      <h1 className="bg-red-400 text-black p-4 rounded-xl mb-3">Hello with chai</h1>
      <Card title="hello" myObj={obj} />
      <Card myObj={obj2} />
    </>
  );
}

export default App; 