import { useEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { IsLoading } from "../components/IsLoading";
import { Team } from "../components/Team";



export const Teams = () => {

    const { data, isLoading } = useFetch('https://api-formula-1.p.rapidapi.com/teams');
    const teams = data?.response;

    const teamRef = useRef(false);

    useEffect(() => {
      if(!isLoading){
        teamRef.current.scrollIntoView({ behavior: "smooth", });
      }
    }, [isLoading]);
    

    return (
        <>
            <h1 className="text-center text-3xl font-bold text-white mt-5 mb-5 uppercase">Teams</h1>

            {
                isLoading &&
                <IsLoading />
            }

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" ref={teamRef}>
                {
                    teams?.map(team => (
                        <Team
                            key={team.id}
                            team={team}
                        />
                    ))
                }
            </div>
        </>
    )
}
