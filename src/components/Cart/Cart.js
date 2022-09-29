import React, { useState } from 'react';
import Myself from '../Myself/Myself';
import Swal from 'sweetalert2'

const Cart = ({ timereq }) => {
    const [breaktime, setBreaktime] = useState([])

    const breakTimes = [10, 20, 30, 40, 50]
    const handleBreakTime = (breaktimes) => {
        setBreaktime(breaktimes);
        localStorage.setItem('Break-time', breaktimes)
    }

    let breakTime = breaktime;
    const exist = localStorage.getItem('Break-time')
    if (exist) {
        breakTime = exist
    }

    const handleActivity = () => {
        Swal.fire(
            'Congratulation!',
            `You are done with your activity!`,
            'success'
        )

    }


    return (
        <div className='sticky top-0'>
            <Myself></Myself>

            <div className="p-5">
                <h4 className='text-xl font-bold'>Add A Break</h4>
                <div className="bg-base-100 p-3 rounded-md mx-auto my-3 flex flex-wrap justify-between gap-2">
                    {
                        breakTimes.map(breaktimes => <button onClick={() => handleBreakTime(breaktimes)} className="btn btn-circle btn-sm text-xs focus:bg-primary focus:text-white">{breaktimes}s</button>)
                    }
                </div>
            </div>

            <div className="p-5">
                <h4 className='text-xl font-bold'>Exercise Details</h4>
                <div className="bg-base-100 p-3 rounded-md mx-auto my-3 flex justify-between">
                    <span>Exercise time</span>
                    <span>{timereq} seconds</span>
                </div>
                <div className="bg-base-100 p-3 rounded-md mx-auto my-3 flex justify-between">
                    <span>Break time</span>
                    <span>{breakTime} seconds</span>
                </div>

                <button onClick={handleActivity} className="btn btn-primary w-full mt-10">Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;