import "./App.css";
import Envelope from "./components/Envelope";
import Stamp from "./components/Stamp";

function App() {
  const toperson = {
    name: "Jane Doe",
    address: "123 Fake Str.",
    city: "New York, NY 10001",
  };

  const fromperson = {
    name: "John Doe",
    address: "456 Fromfake Str.",
    city: "Palm Beach, Fl.  33415",
  };
  const styles = {
    display: "flex",
    justifycontent: "center",
    alignitems: "center",
  };
  return (
    <div className="app-container">
      <div className="App">
        <Envelope {...fromperson} />
        <Stamp />
      </div>
      <div className="stamp">
        <Envelope {...toperson} />
      </div>
    </div>
  );
}

export default App;
