import "./assets/css/style.css";
import Card from "./Card";
import _data from "./assets/data/data.js";
import Details from "./Details";
import { useState } from "react";

function Main() {

    document.title = "Kim's Portfolio";

    const [descData,setDescData] = useState( {title: "", url: "", source: "", img: "", desc: ""} )
    const [details, showDetails] = useState(false);

    return (<>
        <header>
            <div className="stars">
                <div id="stars"></div>
                {/* <div id="stars2"></div> */}
                {/* <div id="stars3"></div> */}
            </div>
            <h1>Kim TD</h1>
            <h2>Web Developer</h2>
            <ul>
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Symfony</li>
            </ul>
        </header>

        <main>
            <section className="cards">
                <h3 id="title">My Works</h3>
                <Details data={descData} visible={details} callback={showDetails}/>
                <div className="container" style={{display: details ? "none" : "flex"}}>

                    {_data.map((e, i) => {
                        return <Card data={e} key={e.id.toString()} callback={showDescription} />
                    })}

                </div>
            </section>
        </main>
        <footer>
            <span>Page coded in JS/React</span>
            <span className="links">
                <div><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" /></svg></div>
                <a href="https://github.com/kimtd09/portfolio" rel="noreferrer" target="_blank" alt="github">GitHub</a>
            </span>
            <span className="links">
                <div>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#ffffff"></path> </g></svg>
                </div>
                <a href="mailto:kim.doa@hotmail.com">contact me</a>
            </span>
        </footer>
    </>);

    function showDescription(id) {
        const i = id===0 ? 0 : id-1;
        setDescData(()=> {
            return { title: _data[i].title, url: _data[i].link, source: _data[i].source, img: _data[i].img, desc: _data[i].description }
        } )
        showDetails(() => true);
        document.getElementById("title").scrollIntoView();
    }

}


export default Main;