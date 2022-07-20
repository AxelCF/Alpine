import { SINGLE_OPTION } from "../../utils/constants";
import SingleOption from "./SingleOption"


const SelectOption = ({option}) =>{
    return (
       <div className="selectOption">
        {option.options.map(option => {
                return <SingleOption option={option} />
            })}
       </div>
   )
   }
export default SelectOption
