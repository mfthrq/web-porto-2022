import Header from './Header.jsx';
import About from './About.jsx';
import Edu from './Edu.jsx';
import Portfolio from './Portfolio.jsx';
import RTPorto from '../components/RTPorto.jsx';
import Footer from './Footer.jsx';

function Home (){
  return(
    <section> 
      <Header/>
      <div class="mx-auto max-w-screen-2xl" id="knowmore">
        <About/>
        <Edu/>
        <RTPorto direction="left" bgColor="bg-black" textColor="text-white"/>
        <RTPorto direction="right" bgColor="bg-black" textColor="text-white"/>
        <Portfolio/>
        <Footer/>
      </div>
      
    </section>
  )
}

export default Home;