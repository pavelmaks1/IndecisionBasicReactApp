console.log('App is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: [],
};

const root2 = document.getElementById('root2');

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderCounterApp();
};

const removeAll = () => {
    app.options = [];
    renderCounterApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subltitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <ol>
                { app.options.map( (option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button> Add</button>
                <button onClick={removeAll}>Remove All</button>
            </form>
        </div>
    );

    ReactDOM.render(template,root2);
}

renderCounterApp();