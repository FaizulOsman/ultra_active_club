import React from 'react';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Myself = () => {
    return (
        <div className='p-5'>
            <div className="flex flex-wrap items-center">
                <div className="avatar my-5">
                    <div className="w-12 mask mask-squircle mr-2">
                        <img src="https://i.ibb.co/74xr60S/Faizul-Osman-Cv-Jpg.jpg" alt="Faizul-Osman-Cv-Jpg" border="0" />
                    </div>
                </div>
                <div className="">
                    <h4 className='text-xl font-bold'>Faizul Osman</h4>
                    <p>{<FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>} <span className='pl-1 text-sm'>Hathazari, Chattogram</span></p>
                </div>
            </div>

            <div className="bg-base-100 p-3 rounded-md mx-auto my-3 flex flex-wrap gap-2 justify-between">
                <div className="">
                    <h3><span className='text-2xl font-bold'>75</span>kg</h3>
                    <p>Weight</p>
                </div>
                <div className="">
                    <h3><span className='text-2xl font-bold'>5.5</span>ft</h3>
                    <p>Height</p>
                </div>
                <div className="">
                    <h3><span className='text-2xl font-bold'>28</span>yrs</h3>
                    <p>Age</p>
                </div>
            </div>


        </div>
    );
};

export default Myself;