import React from 'react';

const Player = ({ player, handleTimeRequired }) => {
    const { picture, name, description, age, time_required } = player
    // console.log(handleTimeRequired);


    return (
        <div>
            <div className="card bg-neutral shadow-xl border p-4">
                <img className='rounded-md border' src={picture} alt="Shoes" />
                <div className="card-body p-0 pt-5">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-sm'>{description}</p>
                    <h5 className='font-semibold'>For Age: {age}</h5>
                    <h5 className='font-semibold'>Time required: {time_required}s</h5>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleTimeRequired(player)} className="btn btn-primary w-full">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;