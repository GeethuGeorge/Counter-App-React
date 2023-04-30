export const Counter = ({ count, onIncrementHandler, onDecrementHandler }) => {
    return (
        <div className="Counter">
            <h1>Counter Calculator:{count}</h1>
            <button className="button1"onClick={onIncrementHandler}>Increment</button>
            <br />
            <button className="button2" onClick={onDecrementHandler}>Decrement</button>
        </div>
    );
};
