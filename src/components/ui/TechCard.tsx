interface TechCardProps{
    name:string,
    image:string,
}

function TechCard({name, image}:TechCardProps) {
    return(
        <>
            <div className="w-fit min-w-28 m-1 p-1 flex gap-1 border-1 rounded-xl">
                <img 
                    width="22" 
                    src={image} 
                    alt={name}
                />
                
                <span>{name}</span>   
            </div>
        </>
    )
}

export default TechCard