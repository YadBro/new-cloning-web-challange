// import { useEffect, useState } from "react";
import TopIMG from "../assets/images/1280x720.jpg";
import productItem from "../assets/images/300x300.jpg";

export default function Brand() {

    // const [logo, setLogo]    = useState({
    //     class: "fa-solid fa-truck fa-xl", 
    //     text: "Delivery to PJ/KL (within 50km) Free delivery available*"
    //     });
    // const [number, setNumber] = useState(1);
    // const array = [
    //     {
    //     class: "fa-solid fa-truck fa-xl", 
    //     text: "Delivery to PJ/KL (within 50km) Free delivery available*"
    //     },
    //     {
    //     class: "fa-regular fa-face-smile fa-xl", 
    //     text: "Preorder Basis Freshness Guaranteed"
    //     },
    //     {
    //     class: "fa-regular fa-heart fa-xl", 
    //     text: "Finest Ingredients 100% Halal, No Alcohol"
    //     },
    //     {
    //     class: "fa-solid fa-medal fa-xl", 
    //     text: "Award Winning Chef Champion of 2016 Asian Pastry Cup"
    //     }
    //     ]

    // useEffect(()=>{
    //     if (window.matchMedia('(max-width: 425px)').matches){
    //         setInterval(() => {
    //             const random = Math.floor(Math.random() * 4);
    //             setLogo(array[random]);
    //         }, 5000);
    //     }else if(window.matchMedia('(max-width: 768px)').matches){
    //         setLogo(array[0]);
    //     }
    // }, 3000)

    return(
        <>
        <div className="content-header" style={{ position: 'relative' }}>
            <img src={TopIMG} alt="topimg" className="header-image" data-aos="fade-in" data-aos-delay="600" data-aos-once="true" />
            <div className="card-header" style={{ position: 'absolute' }} data-aos="fade" data-aos-delay="500" data-aos-once="true">
                <h4 data-aos="fade-up" data-aos-delay="200" data-aos-mirror="false" data-aos-once="true">NEW FLAVOUR</h4>
                <p data-aos="fade-up" data-aos-delay="500" data-aos-mirror="false" data-aos-once="true">Uji Matcha Tart</p>
                <p data-aos="fade-up" data-aos-delay="700" data-aos-mirror="false" data-aos-once="true">Uji Matcha ▪ Azuki ▪ Entremet Tart</p>
                <button type="button" data-aos="fade-up" data-aos-delay="900" data-aos-mirror="false" data-aos-once="true">1 Day Pre-order</button>
            </div>
        </div>
        <div className="superiority">
            <div className="superiority-main">
                {/* {number &&(
                <div className="superiority-item" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="500">
                    <i className={logo.class}></i>
                    <p>{logo.text}</p>
                </div>
                )} */}
                <div className="superiority-item" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="500">
                    <i className="fa-solid fa-truck fa-xl"></i>
                    <p>Delivery to PJ/KL (within 50km) Free delivery available*</p>
                </div>
                <div className="barrier" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="500"></div>
                <div className="superiority-item" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="800">
                    <i className="fa-regular fa-face-smile fa-xl"></i>
                    <p>Preorder Basis Freshness Guaranteed</p>
                </div>
                <div className="barrier" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="800"></div>
                <div className="superiority-item" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="1000">
                    <i className="fa-regular fa-heart fa-xl"></i>
                    <p>Finest Ingredients 100% Halal, No Alcohol</p>
                </div>
                <div className="barrier" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="1000"></div>
                <div className="superiority-item" data-aos-easing="ease-in-sine" data-aos="fade-in" data-aos-delay="1100">
                    <i className="fa-solid fa-medal fa-xl"></i>
                    <p>Award Winning Chef Champion of 2016 Asian Pastry Cup</p>
                </div>
                {/* <div className="barrier"></div> */}
            </div>
        </div>


        <section className="product-section">
            <div className="products">
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="500">
                    <img src={productItem} alt="pdc" />
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="700">
                    <img src={productItem} alt="pdc" />
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="900">
                    <img src={productItem} alt="pdc" />
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="1100">
                    <img src={productItem} alt="pdc" />
                </div>
            </div>

            <h1>Monthly Bestsellers</h1>

            <div className="products" id="brand2">
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="500">
                    <img src={productItem} alt="pdc" />
                    <h4>Valrhona Caraibe Hazelnut Praline from RM115.00</h4>
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="700">
                    <img src={productItem} alt="pdc" />
                    <p className="info">1 day pre-order</p>
                    <h4>Uji Matcha Tart RM105.00</h4>
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="900">
                    <img src={productItem} alt="pdc" />
                    <h4>Citron Tart RM82.00</h4>
                </div>
                <div className="product" data-aos-easing="ease-in-sine" data-aos="fade-up" data-aos-delay="1100">
                    <img src={productItem} alt="pdc" />
                    <h4>Kochi Yuzu Mango Tart RM120.00</h4>
                </div>
            </div>
        </section>

        </>
    )
}