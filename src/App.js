import React from 'react';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic Detail</h1>
      <p>{props.match.params.topicId}</p>
      <p>{props.match.params.param2}</p>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hatpage' component={HatsPage} />
        <Route
          exact
          path='/topics/:topicId?/:param2?'
          component={TopicDetail}
        />
      </Switch>
    </div>
  );
}

export default App;
