import * as React from 'react';
import { connect } from 'react-redux';
import '../../styles/Main.scss';
const logo = require("../../assets/logo.svg") as string;


export interface IProps {
  name: string;
  age?: number;
}

export class Home extends React.Component<IProps, object> {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state:any) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
