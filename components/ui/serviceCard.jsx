import Image from "next/image";

const ServiceCard = ({name, imgURL, subtext, option, label}) => {
    return ( 
        <div className="flex flex-col md:flex-row p-8 items-center justify-center gap-8 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
">
            {/* Left */}
            <div className="flex flex-col gap-8">
                <h1>{name}</h1>
                <p>{subtext}</p>
                <div className="grid grid-cols-2 gap-4">
                    <h3>{label}</h3>
                   
                </div>
            </div>

            {/* Right */}
            <div>
                <Image src={imgURL} width={300} height={400}/>
            </div>
        </div>
     );
}
 
export default ServiceCard;