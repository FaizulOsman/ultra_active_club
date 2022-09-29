import React, { useState } from 'react';
import Myself from '../Myself/Myself';

const Cart = ({ cart }) => {
    const [breaktime, setBreaktime] = useState([])

    const breakTimes = [10, 20, 30, 40, 50]
    const handleBreakTime = (breaktimes) => {
        setBreaktime(breaktimes);
    }

    return (
        <div className='sticky top-0'>
            <Myself></Myself>

            <div className="p-5">
                <h4 className='text-xl font-bold'>Add A Break</h4>
                <div className="bg-base-100 p-3 rounded-md mx-auto my-3 flex flex-wrap justify-between gap-2">
                    {
                        breakTimes.map(breaktimes => <div onClick={() => handleBreakTime(breaktimes)} className="btn btn-circle btn-sm text-xs">{breaktimes}s</div>)
                    }
                </div>
            </div>

            <div className="p-5">
                <h4 className='text-xl font-bold'>Exercise Details</h4>
                <div className="bg-base-100 p-3 rounded-md mx-auto my-3 flex justify-between">
                    <span>Exercise time</span>
                    <span>{cart.time_required} seconds</span>
                </div>
                <div className="bg-base-100 p-3 rounded-md mx-auto my-3 flex justify-between">
                    <span>Break time</span>
                    <span>{breaktime} seconds</span>
                </div>

                <button className="btn btn-primary w-full mt-10">Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;