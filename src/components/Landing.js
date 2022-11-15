import React, { useEffect, useState } from 'react';
import styles from './Landing.module.css'

// API 
import { getCoin } from '../Services/api';
import Coin from './Coin';

// LOADING 
import Loader from './Loader';

const Landing = () => {

    const [search , setSearch] = useState('')
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin();
            setCoins(data)
            console.log(data);
        }
        fetchApi();
    }, [])


    const searchHandler = event =>{
        setSearch(event.target.value)
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <input type='text' className={styles.input} placeholder='Search..' value={search} onChange={searchHandler} />
            {
                coins.length ?
                    <div className={styles.coinContainer}>
                        {
                            searchCoins.map(coin => <Coin
                                    key={coin.id}
                                    name={coin.name}
                                    image={coin.image}
                                    symbol={coin.symbol}
                                    price={coin.current_price}
                                    marketCap={coin.market_cap}
                                    priceChange={coin.price_change_percentage_24h}
                                />
                            )
                        }
                    </div>
                    :
                    <Loader />
            }
        </>
    );
};

export default Landing;