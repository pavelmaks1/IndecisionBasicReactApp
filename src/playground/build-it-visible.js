class Vision extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnShow = this.handleOnShow.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleOnShow() {
        this.setState((vis) => {     
            return {
                visibility: !vis.visibility
            }
        });
    }

    render() {
        return(
            <div>
                <h1>Visibility toggle</h1>
                {console.log(this.state.visibility)}
                <button onClick={this.handleOnShow}>{this.state.visibility ? 'Hide me' : 'Show me' }</button>
                {this.state.visibility && 
                <div>I am visible</div>}
            </div>
        );
    }
}

ReactDOM.render(<Vision />, document.getElementById('root'));


// const app = {
//     title: 'Visibility Toggle',
//     butName: 'Show details',
//     detail: '',
// };

// const root = document.getElementById('root');

// let visibility = false;

// const onShowInfo = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//         <h1>{app.title}</h1>
//         <button onClick={onShowInfo}>{visibility? 'Hide me' : 'Show me'}</button>
//         {visibility && 
//         <div>
//             <p>Hey . There are some details i want to show you.</p>
//         </div>
//         }
//         </div>
//     );

//     ReactDOM.render(template,root);
// };

// render();
