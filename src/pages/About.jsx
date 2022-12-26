function About(){
    return(

      <div className="grid grid-cols-2">
      <div className="">
        <div class="bg-yellow-300 w-full">
          <h2 class="font-bold text-8xl px-5 py-5 border-2 border-black h-60 ">
            About<br></br>Me
          </h2>
        </div>
        
      </div>
      <article class="space-y-4 mt-5 text-xl w-full text-justify px-5">
          <p className="text-3xl">
            Hai👋, my name is <b>Thoriq.</b>
          </p>
          <p>
            I am an <span className="bg-yellow-200">undergraduate student</span> at IPB University majoring in software engineering. Interested in the field of data, such as data analytics and data science. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </article>
    </div>

    )
}

export default About;