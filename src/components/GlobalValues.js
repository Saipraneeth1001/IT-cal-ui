import { useSelector } from "react-redux";

const GlobalValues = () => {

    const taxableIncome = useSelector(state => state.taxableIncome);
    const hraCalculated = useSelector(state => state.hraCalculated);

    return (
        <div>
            <p>Global Values</p>
            { taxableIncome? <p>Taxable Income: {taxableIncome}</p> : ""}
            <br />
            { hraCalculated? <p>Exempted HRA: {hraCalculated}</p> : ""}
        </div>
      );
}
 
export default GlobalValues;