import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';

class Learning extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            val:0
        }
        this.updateState=this.updateState.bind(this);
        this.mount=this.mount.bind(this);
        this.unmount=this.unmount.bind(this);
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }

    updateState(){
        let val=this.state.val;
        val=val+1;
        this.setState({val});
    }
    mount(){
        ReactDOM.render(<Extra />, document.getElementById('extraLayer'));
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('extraLayer'));
        console.log('extra layer removed');
    }
    render(){
        console.log('render');
        return(
            <div>
                React Learning Page
                <div>
                    <button onClick={this.updateState}>{this.state.val}</button>
                </div>
                <button onClick={this.mount}>Attach</button>
                <button onClick={this.unmount}>Detach</button>
                <div id="extraLayer"></div>
            </div>
        );
    }
}

class Extra extends React.Component{
    constructor(props,context){
        super(props,context);
        this.update=this.update.bind(this);
        this.state={
            author:'empty'
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    update(){
        let author="john";
        this.state.author=author;
        // this.props.author="john";

    }
    render(){
        return(
            <div>
                This is Additional Attachment component
                <div>
                    {this.props.author}
                    {this.state.author}
                </div>
                <button onClick={this.update}>Update author Name</button>
            </div>
        );
    }
}

Extra.defaultProps={
    duration:1,
    author:'mike'
}

export default Learning;
