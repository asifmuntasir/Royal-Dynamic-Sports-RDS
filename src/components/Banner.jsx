import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <>
            <div className="w-full">
                <div
                    className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{ backgroundImage: `url(${banner})` }}
                >
                    {/* Optional overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center min-h-screen">
                        <button>Facebook</button>
                        <button>Youtube</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;