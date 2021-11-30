import React, { Component } from 'react';
import '../App.css'

class Resume extends Component {
  render() {

    /*if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }*/

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
               <div><h3>Indian Institute of Technology, Banaras Hindu University (IIT BHU), Varanasi</h3>
                <p className="info">Dual-Degree in Civil Engineering <span>&bull;
                </span><em className="date">to be graduated in July-2022</em></p>
                </div>
               </div>
            </div>

            <div className="row item">
               <div className="twelve columns">
               <div><h3>Sri Chaitanya Techno School, Vijaywada</h3>
                <p className="info">Class 12 <span>&bull;
                </span><em className="date">2017</em></p>
                <p>95.8% marks, Board of Affiliation - CBSE</p>
                </div>
               </div>
            </div>

            <div className="row item">
               <div className="twelve columns">
               <div><h3>Ramakrishna Mission Vidyapith, Deoghar, Jharkhand</h3>
                <p className="info">Class 10 <span>&bull;
                </span><em className="date">2015</em></p>
                <p>10 CGPA, Board of Affiliation - CBSE</p>
                </div>
               </div>
            </div>
         </div>
      </div>


      <div className="row work ">

         <div className="three columns header-col mx-auto">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
         <div><h3>Tech Edunomics</h3>
            <p className="info">Frontend Development Intern<span>&bull;</span> <em className="date">May 2021 - July 2021</em></p>
            <p>Worked on live projects of Company. Worked on the Frontend of CXDeployer and IdeaDeployer Website. Made few mobile responsive website page on both website on ReactJS. Also cloned the website frontend of various website.</p>
        </div>
        </div>
    </div>

   </section>
    );
  }
}

export default Resume;
