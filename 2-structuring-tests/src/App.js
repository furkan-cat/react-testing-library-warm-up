import Jumbotron from "./jumbotron";
import fakeEmployees from "./mocks/employees";
import Table from "./table";
import Travel from "./travel";

function App() {
  return (
    <>
      {/* <Jumbotron /> */}
      {/* <Travel /> */}
      <Table employees={fakeEmployees} />
    </>
  );
}

export default App;
