/* eslint-disable react/require-render-return */
import React from "react";
import Typewriter from "../shared/Typewriter";
import { statements } from "../../data/index.json"

class Code extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      current_statement: 0,
    };
  }

  render() {
    const { current_statement } = this.state;
    setTimeout(() => {
      if (current_statement < statements.length - 1) {
        this.setState({ current_statement: current_statement + 1 });
      } else {
        this.setState({ current_statement: 0 }) 
      }
    }, 15000);
    return (
      <div className="code-container">
        <div className="terminal">
          <div className="terminal-header">
            <div className="header-button red" />
            <div className="header-button yellow" />
            <div className="header-button green" />
          </div>
          <div className="terminal-window">
            <Statement statement={statements[current_statement]} />
          </div>
        </div>
      </div>
    );
  }
}

class Statement extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      return_value: false,
      clear: false,
      statement: "",
    };
  }

  componentDidMount() {
    this.handleChange();
  }

  handleChange = () => {
    setTimeout(() => {
      this.setState({ return_value: true });
    }, 4500);
    setTimeout(() => {
      this.setState({ clear: true });
    }, 8000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ return_value: false, clear: false, })
    this.handleChange();
  }

  render() {
    const { statement } = this.props
    return (
      <div className="statement">
        <div className="input-statement d-flex">
          {this.state.return_value ? (
            <div>{statement.input}</div>
          ) : (
            <Typewriter text={statement.input} />
          )}
        </div>
        {this.state.return_value ? (
          <div>
            <div
              className="return-statement"
              dangerouslySetInnerHTML={{ __html: statement.return }}
            />
            <div className="input-statement d-flex">
              {this.state.clear ? (
                <Typewriter text="clear" />
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Code;
