import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';


function App() {
   return (
    <>
      <Nav title="Título" />
      <Promo> Esto es un hijo</Promo>
      <Intro1/>
      <Intro2/>
      <Intro3/>
      <Footer/>

    </>
   );
}

export default App;
