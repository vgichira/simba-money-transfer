type AuthBannerProps = {
    title?: string,
    description?: string
}

const AuthBanner: React.FC<AuthBannerProps> = ({ title, description }) => {
    return (
        <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
            <div>
                <h1 className="text-white font-bold text-4xl font-sans"> {title || "Simba Transfer"}</h1>
                <p className="text-white mt-1">{description || "Send and Receive Money across borders"}</p>
            </div>
        </div>
    )
}

export default AuthBanner;