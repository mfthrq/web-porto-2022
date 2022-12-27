import ProjectCard from "../components/ProjectCard";

function Portfolio(){
    return (
<section className="bg-black">
  <div class="max-w-screen-xl px-4 py-24 mx-auto">
    <header class="text-center">
      <h2 class="text-xl font-bold text-white sm:text-3xl">
        Projects
      </h2>

      {/* <p class="max-w-md mx-auto mt-4 text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p> */}
    </header>

    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        <ProjectCard title="Indonesia Recovery" title2="Indonesia Recovery" desc="Indonesia Recovery is a web design project for the Indonesian Vocational Olympiad (OLIVIA) 2022 in a form of a news portal aggregator website that provides information about the rise of new enthusiasm after the COVID-19 pandemic by spreading positive news and relating to digital transformation in Indonesia."/>
        <ProjectCard title="Not Yet"/>
        <ProjectCard title="Not Yet"/>
        <ProjectCard title="Not Yet"/>
    </ul>
    <header class="text-center">
      <h2 class="text-xl font-bold text-white sm:text-3xl mt-24">
        Skills
      </h2>

      {/* <p class="max-w-md mx-auto mt-4 text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p> */}
    </header>
  </div>
</section>

    )
}

export default Portfolio;