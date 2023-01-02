import {Link} from 'react-scroll';

function Header(){
    return(
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full border-2 border-black">
          <img
            src={"3davatar-me.png"}
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100 ">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl lg:text-4xl md:text-4xl font-bold">
            Mochammad Fadiil
          </h2>
          <h2 class="text-2xl lg:text-4xl md:text-4xl font-bold bg-pink-300 w-24 lg:w-32 md:w-32">
            Thoriq
          </h2>
          <p class="mt-4 text-lg lg:text-2xl md:text-2xl font-semibold">
            Undergraduate Student.
          </p>

          <Link to="knowmore" spy={true} smooth={true} offset={-10} duration={800} className="group relative inline-block focus:outline-none focus:ring mt-5" href="#knowmore" >
            <span
                class="absolute inset-0 translate-x-0 translate-y-0 bg-blue-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
            ></span>

            <span
                class="relative inline-block border-2 border-current px-8 py-3 text-xl font-bold"
            >
                Know More
            </span>
            </Link>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Header;