export default function CardHeader ({cityName,date,iconLink}){
    return(
    <div className="max-w-sm mx-auto ">
        <div className="flex items-center justify-between p-4 rounded-lg  bg-gray-50">
            <div className="grid gap-1">
                <div className="text-2xl font-bold">
                    {cityName}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    {date}
                </div>
            </div>
            <img  className= "px-7" src={iconLink} alt="Weather icon" />
        </div> 
    </div>
    )
}
