
import { useEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Circuit } from "../components/Circuit";
import { IsLoading } from "../components/IsLoading";

export const Circuits = () => {

    const { data, isLoading } = useFetch('https://api-formula-1.p.rapidapi.com/circuits');
    console.log(data);
    const circuits = data?.response;
    const circuitRef = useRef(false);

    useEffect(() => {
        if(!isLoading){
            circuitRef.current.scrollIntoView({ behavior: "smooth", });
        }
    }, [isLoading]);
    

    return (
        <>
            <h1 className="text-center text-3xl font-bold text-white mt-5 mb-5 uppercase">Circuits</h1>

            {
                isLoading &&
                <IsLoading />
            }

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" ref={circuitRef}>
                {
                    circuits?.map(circuit => (
                        <Circuit
                            key={circuit.id}
                            circuit={circuit}
                        />
                    ))
                }
            </div>
        </>
    )
}
