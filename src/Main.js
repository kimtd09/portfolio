import "./assets/css/style.css";
import Card from "./Card";
import _data from "./assets/data/data.js";

function Main() {
    return <>
        <header>
            <h1>Kim TD</h1>
            <h2>Web Developper</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
        </header>

        <main>
            <section className="cards">
                <h3>My Works</h3>
                <div className="desc">
                    <div>
                        <h2>title</h2>
                        <div>link: url</div>
                        <div>view source: url</div>
                        <hr />
                        <div className="desc-row">
                            <div><img src="./assets/img/gallery.webp" alt="gallery"></img></div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint rem facilis corrupti a
                                voluptates ut,
                                pariatur amet saepe id temporibus voluptate aspernatur nam dignissimos atque veniam,
                                delectus sequi
                                debitis eius.
                                Veniam magni reprehenderit ea explicabo in nobis facilis mollitia et fugit quo ullam libero
                                beatae
                                minima, iusto debitis sunt temporibus numquam, iste possimus sit ex ad nesciunt. Fugiat,
                                voluptatibus
                                nobis.</p>
                        </div>
                    </div>
                    <div><a href="#" id="back">back</a></div>
                </div>
                <div className="container">

                    {_data.map((e, i) => {
                        return <Card data={e} key={e.id.toString()}/>
                    })}

                </div>
            </section>
        </main>
        <footer>

        </footer>
    </>
}

export default Main;