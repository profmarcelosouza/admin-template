export default function Logo() {
    return (
        <div className={`
            rounded-full
            flex flex-col
            items-center justify-center
            h-12 w-12
            bg-white
        `}>
            <div className={`h-4 w-4 rounded-full bg-red-600 mb-1`}></div>
            <div className={`flex mt-1`}>
                <div className="h-4 w-4 rounded-full bg-yellow-500 mr-1"></div>
                <div className="h-4 w-4 rounded-full bg-green-500 mr-1"></div>
            </div>
        </div>
    )
}