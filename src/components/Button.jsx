const Button = ({btn, color}) => {

 

    return (
        <button style={{background: color}} onClick={btn}><i className="fa-solid fa-shuffle"></i></button>
        
    )
}

export default Button