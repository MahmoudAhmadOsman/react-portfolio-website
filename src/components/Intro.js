import React, { Component } from 'react';
class Intro extends Component {
  render() {
    return (
      <div className="container">
              <div className="jumbotron">
              <h2>React Demo Application<sup>&reg;</sup></h2>
              <p>This is a demo application that I am currenlty building with <b>React JS</b>.</p>
                <small className="text-danger">Please, check back again. Thank you. ___ Best. <a href="http://netsansoftware.com/#skills" target="\_blank">Mahmoud Osman</a>.</small>

              </div>
              <div className="card">
              <div className="container">
              <img src="http://netsansoftware.com/images/mahmoud.jpg" alt="Mahmoud Osman" />


              <p>Mahmoud Osman is an entrepreneur, software/web designer and developer.
              He studied at Champlain College, and he has a bachelor's degree of computer science specialized in Web Design and Development.</p>

              <p>On the other side, he has an associate degree of Computer Systems Management from Community College of Vermont. Additionally, he also has three additional web certificates, a web design, web programming, and php programming.</p>

              <p>Moreover, he is a new starter and an entrepreneur of web design and development business and uses modern web technologies. He is devoted to modern technologies and he is into the ever changing web technologies and designs where he believes that web technology can make a change.</p>

              <p>Indeed, he is a web programmer and uses multiple web programming technologies such as HTML5, CSS3, JavaScript, Bootstrap, PHP, Sass, and JQuery. Also, he uses other Content Management Systems or CMS technologies such as Drupal and WordPress and builds with responsive and database driven applications.</p>

              </div>
              <p id="contact"><a href="http://netsansoftware.com/contact" class="btn btn-danger">Let's be in touch</a></p>
              </div>
      </div>
    );
  }
}

export default Intro;
