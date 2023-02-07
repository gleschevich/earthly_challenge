import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
import NavBar from './components/Navbar/Navbar';
import Title from './components/Title/Title';


function App() {
  return (
    <>
       
            <NavBar/>
            <Title/>
            <Carousel/>
            <Items/>
            <Footer/>
    </> 
  )
}

export default App;
