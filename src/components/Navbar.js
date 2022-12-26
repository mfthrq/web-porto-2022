function Navbar(){
    return (
<div className="border-b-2 border-black">
        <nav
        aria-label="Site Nav"
        class="mx-auto flex max-w-3xl items-center justify-between p-4"
      >
        <a
          href="/"
          class="inline-flex h-10 w-32 items-center justify-center rounded-lg bg-gray-100 font-bold"
        >
          MFT
        </a>
      
        <ul class="flex items-center gap-2 text-xl font-medium text-gray-500">
          <li class="hidden lg:block">
            <a class="rounded-lg px-3 py-2" href="/"> Home </a>
          </li>
      
          <li>
            <a class="rounded-lg px-3 py-2" href="/about"> About </a>
          </li>
        </ul>
      </nav>
</div>      
    )
}

export default Navbar;