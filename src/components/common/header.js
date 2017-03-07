import React,{PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav className="header-nav">
            <IndexLink activeClassName="active" to="/">Home</IndexLink>
            {"|"}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {"|"}
            <Link to="/about" activeClassName="active">About</Link>
            {"|"}
            <Link to="/learn" activeClassName="active">Learn</Link>
        </nav>
    );
};

export default Header;
