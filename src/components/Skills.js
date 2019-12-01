import React, { Component } from 'react';
class Skills extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
<div className="col-md-12">
<h2 className="fa fa-id-card-o text-success skill_header"> Skills</h2>
      <hr />
      <p className="text-primary">React Props Example. Props are arguments passed into React components or function. Props or (Properties) are passed to components via HTML attributes</p>
            <ul className="skills">
                <li>{this.props.skill1}</li>
               <li>{this.props.skill2}</li>
                <li>{this.props.skill3}</li>
                <li>{this.props.skill4}</li>
                <li>{this.props.skill5}</li>
                <li>{this.props.skill6}</li>
                 <li>{this.props.skill7}</li>
            </ul>

</div>

      </div>
      </div>
    );
  }
}

export default Skills;
