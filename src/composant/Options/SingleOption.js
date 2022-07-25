import { useDispatch } from "react-redux";
import { selectOption } from "../../state";

const SingleOption = ({option, selectable = true}) =>{

    const dispatch = useDispatch();

    const select = () => {
        dispatch(selectOption(option.slug));
    }

 return (
    <div className={"singleOption " + (option.selected ? 'selected' : '')} onClick={selectable ? select : undefined}>
        <img src="https://via.placeholder.com/150x90"></img>
        <span className="label">{option.label}</span>
        <div className="price">{option.price} €</div>
    </div>
)
}
export default SingleOption
