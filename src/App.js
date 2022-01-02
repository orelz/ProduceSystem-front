import Header from "./Components/Header"
import './App.css';
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import CreateProduceForm from "./Components/CreateProduceForm";


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <CreateProduceForm /> */}
      <Footer />
    </div>
  );
}

export default App;
