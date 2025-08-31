import { Link } from "react-router-dom"

export default function AboutSection() {
    return (
        <section className="about">
            <div className="about-logo">
                <img src="https://media.gettyimages.com/id/1944195181/photo/swirl-spiral-abstract-red-green-motion-speed-blured-shape-hypnosis-vintage-retro-spiritual-on.jpg?s=612x612&w=gi&k=20&c=2791_3LDAnip0XmSUdI304-NV3ojOTG7G6gAHT1ZsVI=" alt="Random Image" />
            </div>
            <div className="about-desc">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam tempore exercitationem maiores odio quos saepe provident sunt praesentium. A maiores corrupti tempore aperiam amet voluptate eum reprehenderit accusantium natus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam tempore exercitationem maiores odio quos saepe provident sunt praesentium. A maiores corrupti tempore aperiam amet voluptate eum reprehenderit accusantium natus?</p>
                <br />
                <button className="btn-cta">
                    <Link to={'/contacto'}>Cotizar Servicios</Link>
                </button>
            </div>
        </section>
    )
}