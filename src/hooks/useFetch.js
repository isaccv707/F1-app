import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError: false,
    })


    const { data, isLoading, hasError } = state;

    const getFetch = async () => {
        setstate({
            ...state,
            isLoading: true,
        })

        const answer = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5c621c13cdmshd6e007cd777f883p18a530jsna5c1dba1bf18',
                'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
            }
        });
        const data = await answer.json();

        setstate({
            data,
            isLoading: false,
            hasError: false,
        })
    }

    useEffect(() => {
        getFetch();
    }, [url]);



    return {
        data,
        isLoading,
        hasError,
    }
}
