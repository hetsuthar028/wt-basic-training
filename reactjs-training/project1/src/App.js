import "./App.css";
import Addemployee from "./components/Day10/AddEmployee";
import DeleteEmployee from "./components/Day10/DeleteEmployee";
import Listemployee from "./components/Day10/ListEmployee";
import Updateemployee from "./components/Day10/UpdateEmployee";
import Updateemployee2 from "./components/Day10/UpdateEmployee2";
import Vendors from "./components/Day10/Vendors";
import AssignmentD9 from './components/Day9/AssignmentD9'
import AssignmentUpdated from "./components/Day9/AssignmentUpdated";
import Routerbasics from "./routes/RouterBasics";

function App() {

    return (
        <div className="App">
            {/* <AssignmentD9 /> */}
            {/* <AssignmentUpdated /> */}

            {/* <Addemployee /> */}
            {/* <Listemployee /> */}
            {/* <DeleteEmployee /> */}
            {/* <Updateemployee /> */}
            {/* <Updateemployee2 /> */}
            {/* <Vendors /> */}
            <Routerbasics />
        </div>
    );
}

export default App;
