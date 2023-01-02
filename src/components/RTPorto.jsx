import Marquee from "react-fast-marquee";

function RTPorto({
    direction,
    bgColor,
    textColor
}){
    return (
    <div>
        <div className="w-full bg-black">
            <Marquee speed={50} gradient={false} direction={direction}>
                <div className={`text-6xl lg:text-9xl md:text-9xl font-bold uppercase ${bgColor} ${textColor} pt-5 pb-8`}>
                    <span>Projects</span>
                    <span>Portfolio</span>
                    <span>Skills</span>
                </div>
            </Marquee>
        </div>
    </div>
        
    )
}

export default RTPorto;