import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (investmentSymbol, newValue) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [investmentSymbol]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput inputHandler={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;
