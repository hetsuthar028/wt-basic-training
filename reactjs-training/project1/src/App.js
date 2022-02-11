import "./App.css";
import Assignment1router from "./routes/Assignment1Router";
import Assignment2router from "./routes/Assignment2Router";

function App() {
    return (
        <div className="App">
            <div className="row mt-3">
                {/* <Assignment1router /> */}
                <Assignment2router />
            </div>
        </div>
    );
}

export default App;
