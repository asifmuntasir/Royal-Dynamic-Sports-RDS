import Logo from '../assets/logo.png'

const Navbar = () => {


    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white w-full px-5">
                <div className="navbar-start">
                    <a>
                        <img
                            src={Logo}
                            width="125"
                            height="125"
                            // className="d-inline-block align-top"
                        />
                    </a>
                    <a className="text-xl top-title">Royal Dynamic Sports</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <button className='top-btn'>
                            Lets Started!
                        </button>
                    </ul>
                </div>
                
            </div>
        </>
    );
};

export default Navbar;