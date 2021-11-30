import React, { Component } from 'react';
import '../App.css'

class About extends Component {
  render() {

    /*if(this.props.data){
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }*/

    return (
      <section id="about">
      <div className="row">
         <div className="twelve columns main-col">
            <h2>About Me</h2>

            <p>Hello everyone, I am Yash Garg. I am a hardworking and dedicated person who like to take challenges. I am interested in technology, Software Development, Web Development. I love reading a lot and am a huge Potter Fan</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Yash Garg</span><br />
						   <span>Parow Pokhar, Lane 1, Aamgola<br />
                     Muzaffarpur, Bihar
                   </span><br />
                     <span>gargyash204@gmail.com</span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
