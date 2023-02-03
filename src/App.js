import './App.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/Navbar';
import Title from './components/Title/Title';


function App() {
  return (
    <>
        <div className='container-fluid'>
            <NavBar/>
            <Title/>
            <Carousel/>
            <Footer/>

          
        </div>
       
      
      
    </> 
  )
}

export default App;
