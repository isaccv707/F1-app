import { Navigation } from "./Navigation";
import logo from '../../images/f1.png';
import f1Fondo from '../../images/fondof1.jpg';

export const Navbar = () => {

    return (
        <div
            className='bg-[#e10600] p-10 flex flex-col items-center justify-center min-h-screen relative'
            style={{ backgroundImage: `url(${f1Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <img
                className="w-auto h-auto ml-10 mt-8 mr-10 absolute top-0 left-0 rounded-md"
                src={logo}
                alt="logo"
            />
            <div className="w-full max-w-screen-lg bg-[#e10600] p-5 mt-96 rounded-md">
                <Navigation/>
            </div>
        </div>
    );
};
