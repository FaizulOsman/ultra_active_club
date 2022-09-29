import React, { useEffect, useState } from 'react';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import Questions from '../Questions/Questions';

const Home = () => {
    const [players, setPlayers] = useState([])
    const [timereq, setTimereq] = useState(0)


    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const handleTimeRequired = player => {
        const newTime = parseInt(player.time_required);
        setTimereq(timereq + newTime)
    }


    return (
        <div>
            <div className="grid grid-cols-12 gap-4">

                <div className="col-span-12 sm:col-span-7 md:col-span-9 m-10 mb-0">
                    <h2 className='text-secondary text-3xl font-bold mb-5'>
                        {<FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>}
                        <span className='ml-3'>Football-Activities</span>
                    </h2>
                    <h4 className='text-lg text-primary my-5'>Select your favourite activity</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            players.map(player => <Player handleTimeRequired={handleTimeRequired} player={player} key={player.name}></Player>)
                        }
                    </div>
                </div>

                <div className="bg-neutral col-span-12 sm:col-span-5 md:col-span-3 rounded-lg m-10 sm:m-0">
                    <Cart timereq={timereq}></Cart>
                </div>
            </div>

            <div className="my-24 mx-10">
                <Questions></Questions>
            </div>
        </div>
    );
};

export default Home;