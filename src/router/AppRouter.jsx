import { Route, Routes } from "react-router-dom"
import { Home } from "../sports/pages/Home"
import { Circuits } from "../sports/pages/Circuits"
import { Drivers } from "../sports/pages/Drivers"
import { Teams } from "../sports/pages/Teams"
import { Races } from "../sports/pages/Races"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/circuits" element={<Circuits/>} />
                <Route path="/races" element={<Races />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/teams" element={<Teams />} />
            </Routes>
        </>
    )
}
