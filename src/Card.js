function Card(args) {
    return <div className="card" onClick={() => args.callback(args.data.id)}>
        <div><img src={args.data.img} alt={args.data.title}></img></div>
        <h4>{args.data.title}</h4>
        <hr />
        <span>{args.data.keywords}</span>
    </div>
}

export default Card;