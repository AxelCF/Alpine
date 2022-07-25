import { useState } from "react";
import { SINGLE_OPTION } from "../../utils/constants";
import SingleOption from "./SingleOption"


const SelectOption = ({option}) =>{
    const [modal, setModal] = useState(false)
    return (
       <div className="selectOption">
            <div onClick={() => setModal(true)}>
                <SingleOption option={option.options.find(o => o.selected)} selectable={false} />
            </div>

            {modal ?
            <div className="selectModal" onClick={() => setModal(false)}>
                <h2>{option.label}</h2>
                {option.options.map(option => {
                    return <SingleOption option={option} />
                })}
            </div>
            : <div></div>
            }
       </div>
   )
   }
export default SelectOption
