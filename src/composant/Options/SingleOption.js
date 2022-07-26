import { useDispatch } from "react-redux";
import { selectOption } from "../../state";

const SingleOption = ({option, selectable = true}) =>{

    const dispatch = useDispatch();

    const select = () => {
        dispatch(selectOption(option.slug));
    }

 return (
    <div className={"singleOption " + (option.selected ? 'selected' : '')} onClick={selectable ? select : undefined}>
        <img src={process.env.PUBLIC_URL + '/assets/catalog/selection/' + option.slug + '.jpg'} width={160} height={80}></img>
        <span className="label">{option.label}</span>
        <div className="price">{option.price} €</div>
    </div>
)
}
export default SingleOption
