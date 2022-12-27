function Edu(){
    return(

  <div className="grid grid-cols-2 mt-32 mb-32">
    <div>
      <article class="space-y-4 mt-5 text-xl w-full text-justify px-5">
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
                    <p className="bg-green-300 w-96 font-semibold mt-2">BASc, Software Engineering Technology</p>
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
                    <p className="bg-green-300 w-96 font-semibold mt-2">Software Engineering</p>
                </div>
            </div>
          </div>
      </article>
    </div>
      <div>
        <div class="bg-green-300 w-full h-full">
          <h2 class="font-bold text-8xl px-5 py-44 border-2 border-black text-right h-full">
            Education
          </h2>
        </div>  
      </div>
    </div>

    )
}

export default Edu;