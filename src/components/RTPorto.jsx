import Marquee from "react-fast-marquee";

function RTPorto({direction}){
    return (
    <div>
        <div className="w-full bg-white">
            <Marquee speed={50} gradient={false} direction={direction}>
                <div className="text-9xl h-44 font-bold uppercase">
                    <span>Works</span>
                    <span>Portfolio</span>
                    <span>Skills</span>
                </div>
            </Marquee>
        </div>
        
    </div>
        
    )
}

export default RTPorto;