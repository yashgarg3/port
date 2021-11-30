import React, { Component } from 'react';
import '../App.css'

class Header extends Component {
  render() {

    /*if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }*/

    return (
      <header id="home">

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Yash Garg.</h1>
            <h3>I'm a <span>Student</span> doing my Dual-degree course in Civil Engineering from IIT (BHU), Varanasi and I am interested in Software Development and Technology.</h3>
            <hr />
         </div>
      </div>

   </header>
    );
  }
}

export default Header;
