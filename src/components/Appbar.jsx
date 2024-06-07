export default function Appbar (){
    return <>
                <div className="flex items-center  h-16 px-4 md:px-6 bg-gray-100">           
                    <CloudIcon className="w-7 h-7 text-blue-500 mr-2" />
                    <div className="text-lg font-bold text-gray-900">Weather App</div>          
                </div>
        </>

}

function CloudIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    )
  }
  