import { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Driver } from "../components/Driver";
import { IsLoading } from "../components/IsLoading";
import { SearchDriver } from "../components/SearchDriver";

export const Drivers = () => {
  const [driver, setDriver] = useState('lewi');
  const { data, isLoading } = useFetch(`https://api-formula-1.p.rapidapi.com/drivers?search=${driver}`);
  const drivers = data?.response;
  console.log(drivers);
  const driverRef = useRef(false);

  useEffect(() => {
    if (!isLoading) {
      driverRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoading]);

  const searchDriver = (e) => {
    e.preventDefault();
    const value = e.target['driver'].value;
    setDriver(value);
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-white mt-5 mb-5 uppercase">
        drivers
      </h1>
      {isLoading && <IsLoading />}

      <SearchDriver searchDriver={searchDriver} />


      <div ref={driverRef}>

        {drivers?.map((driver) => (
          <Driver key={driver.id} driver={driver} />
        ))}

      </div>
    </>
  );
};
