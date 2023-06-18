export default function Widget(props){
    const backgroundImageStyle = {
        backgroundImage: `url("/maxresdefault.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '0',
        paddingTop: '15%', // Adjust this value to set the desired maximum height
        filter: 'brightness(50%)',
    };
    
      const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '10%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        
      };
      
    return <div className="card" >
        <div style={backgroundImageStyle} alt="...">
            
        </div>
        <div style={textStyle}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>

    </div>
}
