import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Campaign-Center</h1>
                <p>React and Redux mixed UI</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;
