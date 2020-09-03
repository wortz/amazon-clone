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
                    id="1231234543534"
                    title="IPhone 11 Red"
                    price={789.99}
                    image="https://s1.kuantokusta.pt/img_upload/produtos_comunicacoes/408439_3_apple-iphone-11-128gb-red-desbloqueado.jpg"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="12312345654"
                    title="ACER Predator Z321Q 4ms 144Hz"
                    price={800.99}
                    image="https://www.worten.pt/i/e41643f7006e823368d84c44bad77f4da5d14faa.jpg"
                    rating={4}
                />
                <Product
                    id="12453123456"
                    title="Ryzen 5 120GB SSD"
                    price={459.99}
                    image="https://www.powerplanetonline.com/cdnassets/caja_pc_unykach_armor_evo_transparente_rgb_01_l.jpg"
                    rating={2}
                />
                <Product
                    id="1231256465421233"
                    title="MARS Gaming MM218"
                    price={25.39}
                    image="https://www.worten.pt/i/e5314ffac8d29166699fb7e83ce934f986460080.jpg"
                    rating={3}
                />
            </div>
            <div className="home__row">
                <Product
                    id="21231456232343267"
                    title="TRUST 830-RW Avonn"
                    price={32.89}
                    image="https://www.worten.pt/i/d9a6f0082f8cd2d8dfda836ec1e6a7a4250f5f59.jpg"
                    rating={2}
                />
            </div>
        </div>
    )
}

export default Home;
