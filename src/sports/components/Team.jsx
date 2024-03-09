export const Team = ({ team }) => {
    const { base, chassis, director, logo, name, world_championships } = team;
    console.log(team)
    return (
        <div className="">
            <div className="bg-[#434040] rounded-md mx-4 my-4">
                <h1 className="text-xl font-bold uppercase text-center my-5 text-white">{name}</h1>
                <img src={logo} alt={name} className="w-full" />
                <p className="mt-4 text-center mb-4 font-bold uppercase text-white">
                    {base}
                </p>
                <div className="flex justify-between text-white">
                    <p className="ml-6 mr-6">Chassis: {chassis}</p>
                    <p className="ml-6 mr-6">Director: {director}</p>
                </div>
                <div className="flex justify-center mt-2 text-white">
                    <p className="ml-6 mr-6">President: {team.president}</p>
                </div>

                <div className="bg-red-600 text-white mt-4 p-5">
                    <p className="mb-4 mt-4 font-semibold uppercase text-center">
                        Championships: {world_championships}
                    </p>
                </div>
            </div>
        </div>
    );
};
