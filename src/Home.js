import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className ='home_container'>
            <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/festive/19/banner-PC-V1.png'
            alt=''/>

            <div className='home_row'>
                {/* Product */}
                <Product id = '4903850' title='The lean startup' price={29.99}
                image='https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg' rating={5} />
                {/* Product */}
                <Product id = '4903851' title='The lean startup' price={29.99}
                image='https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg' rating={5} />
            </div> 

            <div className='home_row'>
                {/* Product */}
                <Product id = '4903852' title='The lean startup' price={29.99}
                image='https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg' rating={5} />
                {/* Product */}
                <Product id = '4903853' title='The lean startup' price={29.99}
                image='https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg' rating={5} />
                {/* Product */}
                <Product id = '4903854' title='The lean startup' price={29.99}
                image='https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg' rating={5} />
            </div> 

            <div className='home_row'>
                {/* Product */}
                <Product id = '4903855' title='The lean startup' price={29.99}
                image='https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg' rating={5} />
            </div> 

        </div>

    </div>
  )
}

export default Home