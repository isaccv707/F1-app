

export const SearchDriver = ({searchDriver}) => {
    return (
        <>
            <h2 htmlFor="search" className="text-white text-center text-2xl mb-2 uppercase">Search Driver</h2>

            <div className="flex justify-center p-5">
                <form
                    className="flex justify-center"
                    onSubmit={searchDriver}
                >
                    <input
                        name="driver"
                        type="text"
                        className="bg-slate-700"
                    />

                    <button
                        type="submit"
                        className="bg-red-600 ml-2 text-white p-2 font-bold uppercase rounded-md"
                    >
                        Search
                    </button>

                </form>
            </div>

        </>
    )
}
