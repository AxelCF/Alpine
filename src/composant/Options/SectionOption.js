import { SELECT_OPTION, SINGLE_OPTION } from "../../utils/constants"
import SelectOption from "./SelectOption"
import SingleOption from "./SingleOption"


const SectionOption = ({option}) =>{
    return (
       <div className="sectionOption">
        {option.options.map(option => {
                switch (option.type) {
                    case SINGLE_OPTION:
                        return <SingleOption option={option} />
                        break;

                    case SELECT_OPTION:
                        return <SelectOption option={option} />
                        break;

                    default:
                        break;
                }
            })}
       </div>
   )
   }
export default SectionOption

