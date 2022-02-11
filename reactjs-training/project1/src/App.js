import "./App.css";
import Assignment1router from "./routes/Assignment1Router";
import Leftnav from './components/Day11/LeftNav';

function App() {
    return (
        <div className="App">
            <div className="row mt-3">
                <Assignment1router />
            </div>
        </div>
    );
}

export default App;
