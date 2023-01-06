function Edu(){
    return(

  <div className="grid grid-cols-2 mt-32 mb-32">
    {/* Title Education Mobile View */}
    <div className="lg:hidden col-span-2 lg:col-span-1">
        <div class="bg-green-300 w-full h-42 lg:h-60">
          <h2 class="font-bold text-5xl lg:text-8xl md:text-8xl px-5 py-5 border-t-2 border-b-2 lg:border-2 border-black h-42 lg:h-60 md:h-60 ">
            Education
          </h2>
        </div>  
    </div>

    <div className="col-span-2 lg:col-span-1">
      <article class="space-y-4 mt-14 lg:mt-5 md:mt-5 text-xl w-full text-justify px-5">
          <div className="timeline">
            <div className="relative">
              <div className="dot" title="current education">
                <div className="dot absolute -top-1 -left-1 animate-ping"></div>
              </div>
                <div className="pl-10">
                  <span className="timeline-date">2022 — 2026</span>
                  <h3 className="timeline-title">IPB University</h3>
                    <p>
                      Bachelor of Applied Science 
                    </p>
                    <p className="bg-green-300 lg:w-96 md:w-96 font-semibold mt-2">BASc, Software Engineering Technology</p>
                </div>
            </div>
            <div className="relative">
              <div className="dot"></div>
                <div className="pl-10">
                  <span className="timeline-date">2019 — 2022</span>
                  <h3 className="timeline-title">SMKN 1 Cibinong</h3>
                    <p>
                      Diploma of Education 
                    </p>
                    <p className="bg-green-300 lg:w-96 md:w-96 font-semibold mt-2">Software Engineering</p>
                </div>
            </div>
          </div>
      </article>
    </div>

     {/* Title Education Web View */} 
    <div className="hidden lg:block col-span-2 lg:col-span-1">
        <div class="bg-green-300 w-full h-60 lg:h-full">
          <h2 class="font-bold text-8xl px-5 py-16 lg:py-44 border-t-2 border-b-2 lg:border-2 border-black text-right h-60 lg:h-full">
            Education
          </h2>
        </div>  
    </div>
  </div>

    )
}

export default Edu;