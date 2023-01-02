import Marquee from "react-fast-marquee";

function RTTools (){
    return (
    <div className="mt-10">
        <div className="w-full">
            <Marquee speed={200} gradient={true} direction={"right"}>
                {/* Programming Languages */}
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"python.png"}
                            class="h-20 w-20"
                        />
                </div>
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"javascript.png"}
                            class="h-20 w-20"
                        />
                </div>
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"php.svg"}
                            class="h-20 w-30"
                        />
                </div>
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"mysql.png"}
                            class="h-20 w-30"
                        />
                </div>

                {/* Libraries */}
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"numpy.png"}
                            class="h-20 w-30"
                        />
                </div>
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"matplotlib.svg"}
                            class="h-20 w-25"
                        />
                </div>
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"reactjs.png"}
                            class="h-20 w-50"
                        />
                </div>
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"laravel.png"}
                            class="h-20 w-50"
                        />
                </div>
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"django.png"}
                            class="h-20 w-50"
                        />
                </div>

                {/* Tools */}
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"powerbi.png"}
                            class="h-20 w-25"
                        />
                </div>
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"googledatastudio.png"}
                            class="h-20 w-25"
                        />
                </div>
                <div className="pt-5 py-8 ml-5">
                        <img
                            src={"micoffice.png"}
                            class="h-20 w-25"
                        />
                </div>
            </Marquee>
        </div>
    </div>
    )
}

export default RTTools;