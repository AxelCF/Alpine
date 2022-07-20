import { SECTION, SELECT_OPTION, SINGLE_OPTION } from "../../utils/constants";
import SectionOption from "./SectionOption"
import SelectOption from "./SelectOption"
import SingleOption from "./SingleOption"



function StepOptions({step}) {

    return(
        <div className="stepOptions">
            {step.options.map(option => {
                switch (option.type) {
                    case SINGLE_OPTION:
                        return <SingleOption option={option} />
                        break;

                    case SECTION:
                        return <SectionOption option={option}/>
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
export default StepOptions