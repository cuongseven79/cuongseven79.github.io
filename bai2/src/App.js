
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import ContainerBody from "./components/Body/ContainerBody";
import NavBar from './components/Header/NavBar';






function App() {

  return (
    <section className="render">
      <Router>
        <NavBar />
        <ContainerBody />
      </Router>
      {/* <Footer /> */}

      {/* ------------------------------------- Body ----------------------------------------------- */}




    </section>



  );
}

export default App;
