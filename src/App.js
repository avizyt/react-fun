import "./App.css";
import Rating from "./Components/Rating";

function App() {
    return (
        <div className='App'>
            <div className='heading'>
                <h1>React Frontend Fun</h1>
            </div>

            <div>
                <Rating />
            </div>
        </div>
    );
}

export default App;
