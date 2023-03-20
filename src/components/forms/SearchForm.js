import React, { useState } from "react";
import AsyncSelect from 'react-select/async';

export default function SearchForm(props){
    const [mode, setMode] = useState('flight')
    const [departureOptions, setDepartureOptions] = useState([])
    const [departure, setDeparture] = useState({})

    const promiseOptions = (inputValue: string) => {
        fetch(`https://airlabs.co/api/v9/suggest?q=${inputValue}&api_key=987649b0-1084-42f6-919b-575a4b92d176`).then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.response.cities){
                    setDepartureOptions(data.response.cities)
                }
            }).catch(e=>console.log(e))
    }

    return (
        <div className="bg-white shadow-lg rounded-xl p-4 -mt-10 w-3/4 mx-auto flex ">
            <div className="w-4/5 border-b border-gray-200 mr-2">
                <div className="flex justify-between h-full">
                    <div className="grid grid-cols-3 text-gray-400 font-medium h-full">
                        <span onClick={() => {setMode('hotel')}} className={`flex cursor-pointer hover:text-gray-600 hover:border-b hover:border-blue-400 items-center ${mode === 'hotel' ? 'text-gray-600 border-b border-blue-400' : ''}`}><img src="https://icons.veryicon.com/png/o/object/home-icon/bed-7.png" className="h-5 w-5 mr-1" />Hotel</span>
                        <span onClick={() => {setMode('flight')}} className={`flex cursor-pointer hover:text-gray-600 hover:border-b hover:border-blue-400 items-center ${mode === 'flight' ? 'text-gray-600 border-b border-blue-400' : ''}`}><img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Airplane_silhouette.svg" className="h-5 w-5 mr-1" />Flight</span>
                        <span onClick={() => {setMode('car_rental')}}  className={`flex cursor-pointer hover:text-gray-600 hover:border-b hover:border-blue-400 items-center ${mode === 'car_rental' ? 'text-gray-600 border-b border-blue-400' : ''}`}><img src="https://www.iconpacks.net/icons/2/free-car-icon-2901-thumb.png" className="h-7 w-7 mr-1" />Car rental</span>
                    </div>
                </div>
                <div className="flex">
                    <AsyncSelect cacheOptions departureOptions loadOptions={promiseOptions} />
                </div>
            </div>
            <div className="w-1/5">
                <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white text-center rounded-md p-3">Search</button>
            </div>
        </div>
    )
}