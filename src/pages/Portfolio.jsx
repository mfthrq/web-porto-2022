import ProjectCard from "../components/ProjectCard";
import PBSkill from "../components/PBSkill";
import RTTools from "../components/RTTools";

function Portfolio(){
    return (
<section className="bg-white">
  <div class="max-w-screen-xl px-4 py-24 mx-auto">

    <header class="text-center ">
      <h2 class="text-5xl font-bold tracking-widest ">
        Projects
      </h2>
    </header>

    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        <ProjectCard title="Indonesia Recovery" title2="Indonesia Recovery" borderCol="border-red-300" desc="Indonesia Recovery is a web design project for the Indonesian Vocational Olympiad (OLIVIA) 2022 in a form of a news portal aggregator website that provides information about the rise of new enthusiasm after the COVID-19 pandemic by spreading positive news and relating to digital transformation in Indonesia." link="https://indonesia-recovery.vercel.app/"/>

        <ProjectCard title="Not Yet" title2="Not Yet" borderCol="border-green-300" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="/"/>

        <ProjectCard title="Not Yet" title2="Not Yet" borderCol="border-yellow-300" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="/"/>

        <ProjectCard title="Not Yet" title2="Not Yet" borderCol="border-blue-300" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="/"/>
    </ul>
    <header class="text-center mt-24 border-t-2 border-black">
      <h2 class="text-5xl font-bold mt-24 mt-10 tracking-widest">
        Skills
      </h2>
    </header>
        <PBSkill skillName="Analytical Thinking" percentage="90%" colorBar="bg-red-300"/>
        <PBSkill skillName="Team Work" percentage="80%" colorBar="bg-blue-300"/>
        <PBSkill skillName="Time Management" percentage="85%" colorBar="bg-yellow-300"/>
        <PBSkill skillName="Problem Solving" percentage="70%" colorBar="bg-green-300"/>
        <PBSkill skillName="Communication" percentage="75%" colorBar="bg-purple-300"/>
    <RTTools/>
    
  </div>
</section>

    )
}

export default Portfolio;