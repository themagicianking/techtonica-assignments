import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListEvents from "./components/ListEvents";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <ListEvents />
    </div>
  );
}

export default App;
