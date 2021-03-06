class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options 
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {
        console.log('ComponentDid mount');
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if (options) {
            this.setState(() => ({options}));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.options.length, this.state.options.length);
        if ( prevState.options.length !== this.state.options.length ) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Component did update');

        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option )
        }));
        
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

        this.setState((prevState) => ({ options: prevState.options.concat([option] )}));

      
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
                handleDeleteOption={this.handleDeleteOption}
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


const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please, add an option to get started</p>}
            {
                props.options.map( option => 
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption} 
                    />)
            }
        </div>
    );
};


const Option = (props) => {
    return(
        <div>
            Here it is: {props.optionText}
            <button 
                onClick={() => {
                    props.handleDeleteOption(props.optionText);
                }}>
                remove</button>
        </div>
    );
};


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

        this.setState(() => ({error}));
        
        if (!error) {
            e.target.elements.option.value = '';
        }
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

ReactDOM.render(<IndecisionApp />,document.getElementById('root'));