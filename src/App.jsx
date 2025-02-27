import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  return (
    <>
      <Header />
      <UserInput />

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
