


export const Circuit = ({ circuit }) => {
    const { name, image, competition, length, laps, lap_record } = circuit;

    return (
        <div className="bg-[#434040] rounded-md mx-4 my-4">
            <h1 className="text-xl text-white bg-[#e10600] font-bold uppercase text-center p-2">{name}</h1>

            <div className="flex items-center justify-center">
                <img 
                src={image} 
                alt={name}
                className="object-cover"
                />
            </div>

            <p className="mt-4 text-center mb-4 text-white font-bold uppercase">
                {competition.location.city}, {competition.location.country}
            </p>

            <div className="flex justify-between">
                <p className="ml-6 mr-6">{length}</p>
                <p className="ml-6 mr-6">Laps: {laps}</p>
            </div>

            <div className="bg-red-600  text-white mt-4">
                <p className="ml-2 mb-4 mt-4 font-semibold uppercase text-center">
                    Lap Record: {lap_record.time}
                </p>
                <p className="text-center">{lap_record.driver}</p>
                <p className="text-center">{lap_record.year}</p>
            </div>

        </div>
    );
};



