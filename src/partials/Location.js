import LctImg from "../assets/images/1280x480.jpg";
import { ids } from "../test/init";

export default function Location() {
    return (
        <>
            <section id="location" style={{ position: 'relative' }} data-testid="location-render-test">
                <img src={LctImg} alt="lctimg" className="lct-img" data-testid={ids.image_1280x480_id} />
                <div className="card-lct">
                    <h3 className="card-lct-title">Our Location</h3>
                    <p className="card-lct-desc">
                    <b>Lachér Patisserie</b><br />
                    A-1-11, Eve Suite,<br />
                    Jalan PJU 1A/41, Ara<br />
                    Damansara,<br />
                    47301,<br />
                    Petaling Jaya, Selangor.<br /><br />

                    <b>Delivery & Pickup ONLY</b><br />
                    (No dine-in/walk-in)<br />
                    Mon - Sun, 11am - 6pm<br /></p>
                    <button type="button">Pickup Location</button>
                </div>
            </section>
        </>
    )
}