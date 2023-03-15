import Jumbotron from "./components/jumbotron";
import fakeEmployees from "./mocks/employees";
import Table from "./components/table";
import Travel from "./components/travel";

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
