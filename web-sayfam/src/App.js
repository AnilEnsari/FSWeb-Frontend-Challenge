import "./App.css";
import Description from "./components/description";
import Header from "./layouts/header";
import Navbar from "./layouts/navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Description />
    </div>
  );
}

export default App;
