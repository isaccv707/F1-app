
import { useEffect, useRef } from "react";
import { dataHome } from "../../data/dataHome";
import { News } from "../components/News";
import { useFetch } from "../../hooks/useFetch";


export const Home = () => {

    const noticias = dataHome;

    // const homeRef = useRef(false);


    //     useEffect(() => {
    //         if(noticias){
    //             homeRef.current.scrollIntoView({ behavior: "smooth", });
    //         }
    //     }, [noticias]);


    return (
        <>
            <h1 className="text-center uppercase font-bold text-2xl mt-5 text-white mb-5">Important Events</h1>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    noticias?.map(noticia => (
                        <News
                            key={noticia.id}
                            noticia={noticia}
                        />
                    ))
                }
            </div>
        </>
    )
}
