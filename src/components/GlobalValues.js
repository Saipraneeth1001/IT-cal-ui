import { useSelector } from "react-redux";

const GlobalValues = () => {
  const taxableIncome = useSelector((state) => state.taxableIncome);
  const hraCalculated = useSelector((state) => state.hraCalculated);
  const newTax = useSelector((state) => state.newTax);
  const oldTax = useSelector((state) => state.oldTax);
  const actualTax = useSelector((state) => state.actualTax);

  return (
    <div>
      <p>Global Values</p>
      {taxableIncome ? <p>Taxable Income: {taxableIncome}</p> : ""}
      <br />
      {hraCalculated ? <p>Exempted HRA: {hraCalculated}</p> : ""}
      <br />
      {newTax ? <p>Tax based on New Regime: {newTax}</p> : ""}
      <br />
      {oldTax ? <p>Tax based on old Regime: {oldTax}</p> : ""}
      <br />
      {actualTax ? <p>Minimum of the two tax regimes: {actualTax}</p> : ""}
    </div>
  );
};

export default GlobalValues;
