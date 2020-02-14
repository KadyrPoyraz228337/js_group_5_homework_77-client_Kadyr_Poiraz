import React from 'react';
import Navigation from "./components/navigation/navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import MessageForm from "./components/messageForm/messageForm";
import Messages from "./components/messages/messages";

const App = () => {
  return (
    <div>
      <Navigation/>
      <Container className='pt-4'>
          <Switch>
              <Route path='/' exact component={Messages}/>
              <Route path='/new' component={MessageForm}/>
          </Switch>
      </Container>
    </div>
  );
};

export default App;
