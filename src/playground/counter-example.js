class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne() {
        this.setState((prevValue) => {
            return prevValue.count++;
        });

    }

    handleMinusOne() {
        this.setState((prevValue) => {
            return prevValue.count--;
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        let count = 0;
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('root'));


// let count = 0;

// const addOne = () =>
// {
//     count++;
//     renderCounterApp();
// } 
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }




// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
            
//         </div>
//     );    

//     ReactDOM.render(templateTwo,root2);
// };

// renderCounterApp();