import "./App.css";
import User from './components/Day4Task/User';
import ClassComp from "./components/ClassComp";
import Classexercise from "./components/ClassExercise";
import Counter from "./components/Counter";
import Checkboxes from "./components/Checkboxes";
import Inputs from "./components/Inputs";
import Employee from "./components/Day4Task/Employee";

function App() {

    return (
        <div className="App">
            <ClassComp />

            <hr />
            <Classexercise />

            <hr />
            <div className="row">
                <div className="col-md-4">
                    <Counter />
                </div>
                <div className="col-md-4">
                    <Checkboxes />
                </div>
                <div className="col-md-4">
                    <Inputs />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <h3 className="my-3">Day 4 | <code>State</code> task</h3>
                    <Employee />
                </div>
                <div className="col-md-6">
                  <h3 className="my-3">Day 4 | <code>Props</code> task</h3>
                    <User />
                </div>
            </div>
        </div>
    );
}

export default App;
