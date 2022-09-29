import React, { useEffect, useState } from 'react';
import { faFootballBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import Questions from '../Questions/Questions';

const Home = () => {
    const [players, setPlayers] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const handleTimeRequired = player => {
        setCart(player)
    }

    return (
        <div>
            <div className="grid grid-cols-12 gap-4">

                <div className="col-span-9 m-10">
                    <h2 className='text-secondary text-2xl font-bold mb-5'>
                        {<FontAwesomeIcon icon={faFootballBall}></FontAwesomeIcon>}
                        <span className='ml-3'>UtRA-Active-club</span>
                    </h2>
                    <h4 className='text-lg text-primary my-5'>Select today's exercise</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            players.map(player => <Player handleTimeRequired={handleTimeRequired} player={player}></Player>)
                        }
                    </div>
                    <div className="mt-24">
                        <Questions></Questions>
                    </div>
                </div>


                <div className="bg-neutral border col-span-3">
                    <Cart cart={cart}></Cart>
                </div>


            </div>

        </div>
    );
};

export default Home;