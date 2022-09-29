import React from 'react';

const Activity = ({ activity, handleTimeRequired }) => {
    const { picture, name, description, age, time_required } = activity

    return (
        <div>
            <div className="card bg-neutral shadow-xl p-4">
                <img className='rounded-md' src={picture} alt="Shoes" />
                <div className="card-body p-0 pt-5">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-sm'>{description}</p>
                    <h5 className='font-semibold'>For Age: {age[0]}-{age[1]}</h5>
                    <h5 className='font-semibold'>Time required: {time_required}s</h5>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleTimeRequired(activity)} className="btn btn-primary w-full">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;