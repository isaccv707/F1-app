

export const Race = ({ race }) => {

    

    return (
        <div className="bg-[#434040] rounded-md mx-4 my-4">
            <h1 className="text-xl text-white bg-[#e10600] font-bold uppercase text-center p-2">{race.circuit.name}</h1>

            <div className="flex items-center justify-center">
                <img
                    src={race.circuit.image}
                    alt={race.circuit.image}
                    className="object-cover"
                />
            </div>
            <p className="mt-4 text-center mb-4 text-white font-bold uppercase">
                {race.competition.location.city}, {race.competition.location.country}
            </p>
            <p className="mt-4 text-center mb-4 text-white font-semibold uppercase">
                Competition: {race.competition.name}
            </p>

            <div className="bg-red-600  text-white mt-4">
                <p className="ml-2 mb-4 mt-4 font-semibold uppercase text-center">
                    SEASON: {race.season}
                </p>
                <p className="text-center">{race.status}</p>
                <p className="text-center">{race.type}</p>
            </div>

        </div>
    )
}
