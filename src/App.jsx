function App() {
  return (
    <>
      <div id="header">
        <img src="investment-calculator-logo.png" alt="Investment picture" />
        <h1>Investment Calculator</h1>
      </div>
      <div id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment</label>
            <input type="number" />
          </div>
          <div>
            <label>Annual Investment</label>
            <input type="number" />
          </div>
        </div>
        <br />
        <div className="input-group">
          <div>
            <label>Expected Return</label>
            <input type="number" />
          </div>
          <div>
            <label>Duration</label>
            <input type="number" />
          </div>
        </div>
      </div>

      <table id="result">
        <thead>
          <th>Year</th>
          <th>Invest Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
