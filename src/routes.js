import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/courses/CoursePage';
import Learning from './components/courses/Learning';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursePage} />
        <Route path="about" component={AboutPage} />
        <Route path="learn" component={Learning} />
    </Route>
);
