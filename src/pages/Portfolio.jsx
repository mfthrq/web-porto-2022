import ProjectCard from "../components/ProjectCard";
import RTTools from "../components/RTTools";
import Certif from "../components/Certif";

function Portfolio(){
    return (
<section className="bg-white">
  <div class="max-w-screen-xl px-4 py-24 mx-auto">
    <header class="bg-red-300 w-64">
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
    <header class="mt-24 bg-blue-300 w-96">
      <h2 class="text-5xl font-bold mt-24 mt-10 tracking-widest" >
        Certificates
      </h2>
    </header>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10">
      <div className="col-span-1">
        <Certif namaCertif="Certificate of Competence Software Development | KKNI Level II of Software Engineering"   fotoCertif="certif-lsp.jpg" tahun="2022" bulanTanggal="Jun" deskCertif="Badan Nasional Sertifikasi Profesi (BNSP)"/>
      </div>
      <div className="col-span-1">
        <Certif namaCertif="Lomba Desain Website Olimpiade Vokasi Indonesia (OLIVIA) 2022" tahun="2022" fotoCertif="certif-olivia2022.jpg" bulanTanggal="Oct" deskCertif="Yogyakarta State University"/>
      </div>
    </div>

    <header class="bg-green-300 w-64">
      <h2 class="text-5xl font-bold mt-24 mt-10 tracking-widest">
        Skills
      </h2>
    </header>
    <RTTools/>
    
  </div>
</section>

    )
}

export default Portfolio;