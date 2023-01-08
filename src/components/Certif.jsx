function Certif(
    {
        namaCertif,
        tahun,
        bulanTanggal,
        deskCertif,
        fotoCertif
    }
){
return (
    <div className="w-full border border-black">
        <article class="flex bg-white transition hover:shadow-xl">
            <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <div className="flex items-center justify-between gap-4 text-lg font-bold uppercase text-gray-900 tracking-widest">
                    <span>{tahun}</span>
                    <span class="w-1 flex-1 bg-gray-300 rounded-lg"></span>
                    <span>{bulanTanggal}</span>
                </div>
            </div>

            <div class="hidden sm:block sm:basis-56 border-r border-l border-black">
                <img
                alt="Guitar"
                src={`${fotoCertif}`}
                class="aspect-square h-full w-full object-cover"
                />
            </div>

            <div class="flex flex-1 flex-col justify-between">
                <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="/">
                        <h3 class="font-bold uppercase text-gray-900">
                            {namaCertif}
                        </h3>
                    </a>

                    <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                        {deskCertif}
                    </p>
                </div>
            </div>
        </article>
    </div>
    )
}

export default Certif;