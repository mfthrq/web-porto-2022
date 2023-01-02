function About(){
    return(

    <div className="grid grid-cols-2">
      <div className="col-span-2 lg:col-span-1">
        <div class="bg-yellow-300 w-full">
          <h2 class="font-bold text-5xl lg:text-8xl md:text-8xl px-5 py-5 border-t-2 border-b-2 lg:border-2 border-black h-42 lg:h-60 md:h-60 ">
            About<br></br>Me
          </h2>
        </div>
        
      </div>
      <article class="space-y-4 mt-5 text-xl w-full px-5 col-span-2 lg:col-span-1">
          <p className="text-3xl">
            Hai👋, my name is <b>Thoriq.</b>
          </p>
          <p className="text-justify">
            I am an <span className="bg-yellow-300">undergraduate student </span> at IPB University majoring in software engineering. Interested in the field of data, such as data analytics and data science. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
      </article>
    </div>

    )
}

export default About;