import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import { calculateInvestmentResults } from "./util/investment.js";
import ResultsTable from "./components/ResultsTable.jsx";


function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000, 
    annualInvestment: 1200, 
    expectedReturn: 6, 
    duration: 10,
  });
  let arr = null;
  if (userInputs.initialInvestment > 0 && userInputs.annualInvestment > 0 && userInputs.expectedReturn > 0 && userInputs.duration > 0) {
    arr = calculateInvestmentResults(userInputs);
  }
  function handleChange (event, type) {
    setUserInputs(curInput => {
      return {
        ...curInput, 
        [type]: +(event.target.value),
      };
    })
  }
  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput label="initial Investment" type="initialInvestment" onType={handleChange} val={userInputs.initialInvestment} />
          <UserInput label="annual Investment" type="annualInvestment" onType={handleChange} val={userInputs.annualInvestment} />
        </div>
        <div className="input-group">
          <UserInput label="expected Return" type="expectedReturn" onType={handleChange} val={userInputs.expectedReturn}/>
          <UserInput label="duration" type="duration" onType={handleChange} val={userInputs.duration}/>
        </div>
      </section>
      <section>
        <table id="result" className="center">
          <thead>
            <tr>
              {userInputs.duration > 0 ?
                <>
                  <th>year</th>
                  <th>investment value</th>
                  <th>interest</th>
                  <th>total interest</th>
                  <th>invested capital</th>
                </>:
                <p className="center">The duration is less than 1</p>
              }
            </tr>
          </thead>
          <tbody>
            {arr != null && userInputs.duration > 0 &&
              arr.map((item, index) => {
                return <ResultsTable key={index} row={item} />;
              }) 
            }
          </tbody>
        </table>
      </section>
    </>
  );
}

export default App
