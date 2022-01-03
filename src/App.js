import "./App.css";
import SlidingNav from "./components/SlidingNav";

function App() {
  return (
    <div className="App">
      <SlidingNav
        liArr={["HOME", "SHOP", "ORDER", "123", "456", "789"]}
        urlArr={["#", "#", "#", "#", "#", "#"]}
      />
    </div>
  );
}

export default App;
