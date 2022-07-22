
const SingleOption = ({option}) =>{
    
    return (
        <div className="singleOption">{option.selected ? " V ": ""}{option.label}</div>
    )
}
export default SingleOption
