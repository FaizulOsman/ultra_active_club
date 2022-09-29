import React from 'react';
import Myself from '../Myself/Myself';

const Cart = ({ cart }) => {

    const handleBreakTime = () => {
        console.log('this.innerText');
    }


    return (
        <div className=''>
            <Myself></Myself>

            <div className="p-5">
                <h4 className='text-xl font-bold'>Add A Break</h4>
                <div className="bg-base-100 p-3 rounded-md mx-auto my-3 flex flex-wrap justify-between gap-2">
                    <div className="btn btn-circle btn-sm text-xs"><span>10</span>s</div>
                    <div className="btn btn-circle btn-sm text-xs"><span>20</span>s</div>
                    <div onClick={handleBreakTime} className="btn btn-circle btn-sm text-xs"><span>30</span>s</div>
                    <div className="btn btn-circle btn-sm text-xs"><span>40</span>s</div>
                    <div className="btn btn-circle btn-sm text-xs">50s</div>
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
                    <span>{ } seconds</span>
                </div>

                <button className="btn btn-primary w-full mt-10">Add to list</button>
            </div>
        </div>
    );
};

export default Cart;