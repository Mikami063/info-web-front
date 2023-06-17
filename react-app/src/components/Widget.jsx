export default function Widget(props){
    return <div className="card" >
        <img src="/maxresdefault.jpg" className="card-img-top" style={{maxHeight: '200px'}} alt="..."></img>

        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </div>
}
