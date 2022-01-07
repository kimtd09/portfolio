function Details(args) {

    const _close = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>;

    return <div className={args.visible ? "desc desc-show" : "desc"}>
        <div>
            <h2>{args.data.title}</h2>
            <div>link: <a href={args.data.url} rel="noreferrer" target="_blank">{args.data.url}</a></div>
            <div>view source: <a href={args.data.source} rel="noreferrer" target="_blank">{args.data.source}</a></div>
            <div className="desc-close" onClick={() => args.callback(() => false)}>{_close}</div>
            <hr />
            <div className="desc-row">
                <div><img src={args.data.img} alt="gallery"></img></div>
                <p>{args.data.desc}</p>
            </div>
        </div>
    </div>
}

export default Details;