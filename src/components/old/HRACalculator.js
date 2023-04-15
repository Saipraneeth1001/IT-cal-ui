import { useState } from "react";
import { useDispatch } from "react-redux";

const HRACalculator = () => {
  const [metro, setMetro] = useState(false);
  const [basic, setBasic] = useState(0);
  const [dearness, setDearness] = useState(0);
  const [hra, setHra] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [taxableHra, setTaxableHra] = useState(0);

  const dispatch = useDispatch();

  const calcuateHRA = () => {
    if (hra * 12 < 100000) {
      console.log("waste of time, don't even calculate this stuff");
    } else {
      const ahra = hra * 12;
      let ametro = 0;
      if (metro === true) {
        ametro = 0.5 * ((basic + dearness) * 12);
      } else {
        ametro = 0.4 * ((basic + dearness) * 12);
      }
      const arent = (rentPaid * 12) - 0.1 * (basic + dearness) * 12;
      setTaxableHra((hra * 12) - Math.min(ahra, ametro, arent));
      dispatch({type: "hraCalculated", payload: (hra * 12) - Math.min(ahra, ametro, arent)});
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calcuateHRA();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Basic Salary">Basic Salary Per Month</label>
          <input
            type="number"
            id="Basic Salary"
            value={basic}
            onChange={(e) => setBasic(parseFloat(e.target.value))}
          />
          <br />
          <label htmlFor="HRA received">HRA received per month</label>
          <input
            type="number"
            id=""
            value={hra}
            onChange={(e) => setHra(parseFloat(e.target.value))}
          />
          <br />
          <label htmlFor="Dearness Allowance">
            Dearness allowance received per month
          </label>
          <input
            type="number"
            id=""
            value={dearness}
            onChange={(e) => setDearness(parseFloat(e.target.value))}
          />
          <br />
          <label htmlFor="Rent paid for month">Rent paid per month</label>
          <input
            type="number"
            id=""
            value={rentPaid}
            onChange={(e) => setRentPaid(parseFloat(e.target.value))}
          />
          <br />
          <label htmlFor="Metro">If metro, Type true - default is false.</label>
          <input
            type="boolean"
            id=""
            value={metro}
            onChange={(e) => setMetro(true)}
          />
          <br />
          <h5>Metro cities - Delhi, Mumbai, Kolkata, Chennai</h5>
        </div>
        <button type="submit">Calculate HRA</button>
      </form>
        <div>
        {taxableHra?  <h4> {taxableHra} </h4>: ""}
        </div>
    </div>
  );
};

export default HRACalculator;
