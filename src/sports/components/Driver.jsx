import { DriverTeam } from "./DriverTeam";


export const Driver = ({ driver }) => {
  console.log(driver);

  const { birthdate, image, name, world_championships, country, birthplace, podiums, teams } = driver;
  return (
    <>
        <div className=" rounded-md mx-4 my-4 flex flex-wrap">
          <div className="min-w-[350px] flex flex-col justify-center items-center">
            <img src={image} alt={image} />
          </div>

          <div className="bg-red-600 text-white p-5 flex-1 mt-7 rounded-xl">
            <h1 className='text-white text-center uppercase font-bold text-3xl'>driver information</h1>
            <div className=" text-white text-center">
              <p className="ml-6 mr-6">{name}</p>
              <p className="ml-6 mr-6">{birthdate}</p>
              <p className="ml-6 mr-6">{birthplace}</p>
              <p className="ml-6 mr-6 mt-3 font-bold">World Champion: {world_championships}</p>
              <p className="ml-6 mr-6 font-bold">Podiums: {podiums}</p>
            </div>

          </div>

        </div>
    </>
  )
}

