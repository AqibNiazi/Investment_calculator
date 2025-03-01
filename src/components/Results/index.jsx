import React from "react";
import { calculateInvestmentResults } from "../../util/investment";

const Results = ({ input }) => {
  const result = calculateInvestmentResults(input);
  console.log(result);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Year</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
    </table>
  );
};

export default Results;
s;