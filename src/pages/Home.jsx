import Header from './Header.jsx';
import About from './About.jsx';
import Edu from './Edu.jsx';
import Portfolio from './Portfolio.jsx';
import RTPorto from '../components/RTPorto.jsx';

function Home (){
  return(
    <section> 
      <Header/>
      <div class="mx-auto max-w-screen-2xl py-16" id="knowmore">
        <About/>
        <Edu/>
        <RTPorto direction="right"/>
        <Portfolio/>
        <RTPorto direction="left"/>
      </div>
      
    </section>
  )
}

export default Home;