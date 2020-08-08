import React from 'react'
import '../styling/Home.css'
import Product from '../components/Product';

function Home() {
    return (
        <div className="home">
            <img className="home__banner"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
            alt="Home Banner" />
            <div className="home__row">
                <Product 
                id="123123"
                title="Asus TUF Gaming H7 Black/Red"
                price={99.99}
                image="https://i.imgur.com/6aJyXUn.jpg"
                rating={4}
                />
                <Product 
                id="123123"
                title="Asus TUF Gaming H7 Black/Red"
                price={99.99}
                image="https://s1.kuantokusta.pt/img_upload/produtos_comunicacoes/408439_3_apple-iphone-11-128gb-red-desbloqueado.jpg"
                rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                id="123123"
                title="Asus TUF Gaming H7 Black/Red"
                price={99.99}
                image="https://i.imgur.com/6aJyXUn.jpg"
                rating={4}
                />
                <Product 
                id="123123"
                title="Asus TUF Gaming H7 Black/Red"
                price={99.99}
                image="https://i.imgur.com/6aJyXUn.jpg"
                rating={4}
                />
                <Product 
                id="123123"
                title="Asus TUF Gaming H7 Black/Red"
                price={99.99}
                image="https://i.imgur.com/6aJyXUn.jpg"
                rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                id="123123"
                title="Asus TUF Gaming H7 Black/Red"
                price={99.99}
                image="https://i.imgur.com/6aJyXUn.jpg"
                rating={4}
                />
            </div>
        </div>
    )
}

export default Home;
