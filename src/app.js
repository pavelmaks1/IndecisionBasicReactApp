class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options 
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'The option already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }

   render() {
        
       return(
           <div>
               <Header />
               <Action 
                hasOptions={this.state.options.length > 0}
                handlePick = {this.handlePick}
                 />
               <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions} 
               /> 
               <AddOption 

                handleAddOption={this.handleAddOption}
                />
           </div>
       );
   } 
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of computer!'

};


// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }
 
const Action = (props) => {
        return (
            <div>
                <button 
                    onClick={props.handlePick} 
                    disabled={!props.hasOptions}>
                What should i do?</button>
            </div>
        );
};


// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should i do?</button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            
            {
                props.options.map( option => <Option key={option} optionText={option}/>)
            }
        </div>
    );
};


// class Options extends React.Component {

//     render() {
//         return(
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                
//                 {
//                     this.props.options.map( option => <Option key={option} optionText={option}/>)
//                 }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return(
        <div>
            Here it is: {props.optionText}
        </div>
    );
};


// class Option extends React.Component {
//     render() {
//         return(
//             <div>
//                 Here it is: {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error }
        });
    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form action="text" onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name:{props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
    
// };

ReactDOM.render(<IndecisionApp />,document.getElementById('root'));