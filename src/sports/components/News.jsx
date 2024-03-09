import React from 'react'

export const News = ({ noticia }) => {
    
    const { year, title, description, image } = noticia;

    return (
        <>
            <div className="bg-[#434040] rounded-md mx-4 my-4 p-5">
                <div className='bg-[#e10600] text-white p-2 rounded-md'>
                    <p className='text-start font-semibold text-xl'>{year}</p>
                </div>
                <h1 className="text-xl font-bold uppercase my-5 text-white">{title}</h1>
                <div className="flex items-center justify-center">
                    <img
                        src={image}
                        alt={image}
                        className="object-cover"
                    />
                </div>
                <h2 className='mt-2 font-medium text-white'>{description}</h2>
            </div>
        </>
    )
}
