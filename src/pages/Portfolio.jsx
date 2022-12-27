import ProjectCard from "../components/ProjectCard";
import PBSkill from "../components/PBSkill";

function Portfolio(){
    return (
<section className="bg-black">
  <div class="max-w-screen-xl px-4 py-24 mx-auto">

    <header class="text-center ">
      <h2 class="text-5xl font-bold text-white tracking-widest ">
        Projects
      </h2>
    </header>

    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        <ProjectCard title="Indonesia Recovery" title2="Indonesia Recovery" desc="Indonesia Recovery is a web design project for the Indonesian Vocational Olympiad (OLIVIA) 2022 in a form of a news portal aggregator website that provides information about the rise of new enthusiasm after the COVID-19 pandemic by spreading positive news and relating to digital transformation in Indonesia." link="https://indonesia-recovery.vercel.app/"/>

        <ProjectCard title="Not Yet" title2="Not Yet" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>

        <ProjectCard title="Not Yet" title2="Not Yet" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>

        <ProjectCard title="Not Yet" title2="Not Yet" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
    </ul>
    <header class="text-center mt-24 border-t-2 border-white">
      <h2 class="text-5xl font-bold mt-24 text-white mt-10 tracking-widest">
        Skills
      </h2>
    </header>
    <PBSkill skillName="Analytical Thinking" percentage="90%" colorBar="bg-red-300"/>
    <PBSkill skillName="Team Work" percentage="70%" colorBar="bg-blue-300"/>
    <PBSkill skillName="Time Management" percentage="70%" colorBar="bg-yellow-300"/>
    <PBSkill skillName="Problem Solving" percentage="60%" colorBar="bg-green-300"/>
    
    
  </div>
</section>

    )
}

export default Portfolio;