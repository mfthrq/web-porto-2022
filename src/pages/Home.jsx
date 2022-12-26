import Header from './Header.jsx';
import About from './About.jsx';
import Edu from './Edu.jsx';

function Home (){
  return(
    <section>
      <Header/>
      <div class="mx-auto max-w-screen-xl py-16" id="knowmore">
        <About/>
        <Edu/>
      </div>
    </section>
  )
}

export default Home;