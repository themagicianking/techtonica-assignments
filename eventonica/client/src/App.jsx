import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListEvents from "./components/ListEvents";
import ListSearchResults from "./components/ListSearchResults";

function App() {
  return (
    <div className="App">
      <ListSearchResults />
      <ListEvents />
    </div>
  );
}

export default App;
