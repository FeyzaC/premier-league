import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((e) => (
        <Main {...e} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
