import TopIMG from "../assets/images/1280x720.jpg";
import { ids } from "../test/init";

export default function Blog() {
    return(
        <>
            <section id="blog" data-testid="blog-render-test">
                <div className="blog-content">
                    <h1 className="section-title">From The Blog</h1>
                    <div className="brand-img">
                        <div className="left">
                            <img src={TopIMG} alt="tpmg" data-testid={ids.image_1280x720_id}/>
                            <b className="blog-title">25 Chinese New Year Wishes in Chinese & English for CNY 2022!</b>
                            <p>One of the best ways to send your family and friends your good blessings for the year 2022 is of course, through words of encouragement,...</p>
                            <a href="#read-more">Read more</a>
                        </div>
                        <div className="right">
                            <img src={TopIMG} alt="tpmg" data-testid={ids.image_1280x720_id}/>
                            <b className="blog-title">2 captivating 2021 Christmas cakes that will WOW your friends and family!</b>
                            <p>Don't you think it's time to spice up your Christmas dessert table with something new, fresh, and jaw-dropping all at the same time? We do!...</p>
                            <a href="#read-more">Read more</a>
                        </div>
                    </div>
                    <button>View all</button>
                </div>
            </section>
        </>
    )
}