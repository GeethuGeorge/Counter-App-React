import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./Components/Counter";

function App() {
    const [count, setCount] = useState(0);

    //Increment Function
    const onIncrementHandler = () => {
        setCount((prev) => {
            if (prev < 10) return (prev = prev + 1);
            else if (confirm("Please Enter a valid number, Number cannot be incremented more than 10 ! "))
             setCount(prev);
        });
    };

    //Decrement Function
    const onDecrementHandler = () => {
        setCount((prev) => {
            if (prev > 0) return (prev = prev - 1);
            else if (confirm("Please enter a valid number, Number cannot be decremented less than 0 ! ")) 
            setCount(prev);
        });
    };

    return (
        <div className="App">
            <Counter count={count} onIncrementHandler={onIncrementHandler} onDecrementHandler={onDecrementHandler} />
        </div>
    );
}

export default App;
