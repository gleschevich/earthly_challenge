import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
import NavBar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import KitBrand from './components/KitBrand/KitBrand';


function App() {
  return (
    <>
       
            <NavBar/>
            <Title/>
            <KitBrand/>
            <Items/>
            <Footer/>
    </> 
  )
}

export default App;
