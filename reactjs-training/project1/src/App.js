import "./App.css";
import Assignment1router from "./routes/Assignment1Router";
import Assignment2router from "./routes/Assignment2Router";
import Routerd12 from "./routes/RouterD12";

function App() {
    return (
        <div className="App">
            <div className="row mt-3">
                {/* <Assignment1router /> */}
                {/* <Assignment2router /> */}
                <Routerd12 />
            </div>
        </div>
    );
}

export default App;
