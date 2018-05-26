import React from 'react';
import { Tooltip } from 'reactstrap';

const divStyle = {
  margin: '10px'
}

export default class ToolTips extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div style={divStyle}>
        <p className='text-muted'>Please type in the following <a href="#" id="TooltipExample">words</a> for the search.</p>
          <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
            facebook,
            javascript,
            rich,
            ajax,
            software
          </Tooltip>
      </div>
    );
  }
}
