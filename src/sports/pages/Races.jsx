import { useFetch } from "../../hooks/useFetch";
import { Race } from "../components/Race";
import { IsLoading } from "../components/IsLoading";
import { useEffect, useRef } from "react";

export const Races = () => {

    const { data, isLoading } = useFetch('https://api-formula-1.p.rapidapi.com/races?season=2021');
    const races = data?.response;

    const racesRef = useRef(false);

    useEffect(() => {
        if(!isLoading){
            racesRef.current.scrollIntoView({ behavior: "smooth", });
        }
    }, [isLoading]);

    return (
        <>
            <h1 className="text-center text-3xl font-bold text-white mt-5 mb-5 uppercase" id="races">Races</h1>

            {
                isLoading &&
                <IsLoading />
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" ref={racesRef}>
                {
                    races?.map(race => (
                        <Race
                            key={race.id}
                            race={race}
                        />
                    ))
                }
            </div>
        </>
    )
}
