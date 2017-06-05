import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import Header from './Header'
import List from './List'
import NewPerson from './NewPerson'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

import './App.css'

class App extends React.Component<{}, null> {
  onSigningRequest() {
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Header />
          <div className="App-content">
            <Route exact path="/" component={ List }/>
            <Route path="/addperson" component={ NewPerson } />
            <FloatingActionButton>
              <ContentAdd />
            </FloatingActionButton>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
