const Button = ({text, onClick, className = 'button'}) => {
	return (
        <div>
            <button className = {className} onClick = {onClick} >{text}</button>
        </div>
        
	)
}
export default Button