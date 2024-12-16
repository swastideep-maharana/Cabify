import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const FinishRide = (props) => {
    const navigate = useNavigate()

    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
            rideId: props.ride._id
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }
    }

    return (
        <div className="bg-white shadow-lg p-6 rounded-lg">
            <h5 
                className="p-1 text-center w-[93%] absolute top-0 cursor-pointer hover:text-gray-400" 
                onClick={() => props.setFinishRidePanel(false)}>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5 text-indigo-700">Finish this Ride</h3>
            <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg bg-yellow-50 mt-4">
                <div className="flex items-center gap-3">
                    <img 
                        className="h-12 rounded-full object-cover w-12 border-2 border-gray-300"
                        src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" 
                        alt="Rider"
                    />
                    <h2 className="text-lg font-medium text-gray-800">{props.ride?.user.fullname.firstname}</h2>
                </div>
                <h5 className="text-lg font-semibold text-green-600">2.2 KM</h5>
            </div>
            <div className="flex gap-2 justify-between flex-col items-center">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-2 hover:bg-gray-100">
                        <i className="ri-map-pin-user-fill text-xl text-indigo-600"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-2 hover:bg-gray-100">
                        <i className="text-lg ri-map-pin-2-fill text-indigo-600"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 hover:bg-gray-100">
                        <i className="ri-currency-line text-lg text-green-600"></i>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800">₹{props.ride?.fare}</h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 w-full">
                    <button
                        onClick={endRide}
                        className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg hover:bg-green-700 transition-colors">
                        Finish Ride
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FinishRide
