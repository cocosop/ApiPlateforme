import LOGO from '../../assets/img/logo.png';

const LoadingPage = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-white">
            <img
                src={LOGO}
                alt="Logo"
                className="h-20 animate-ping-slow"
            />
        </div>
    );
};

export default LoadingPage;