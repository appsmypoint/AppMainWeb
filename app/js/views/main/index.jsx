import React from "react";

import '../../../assets/css/material-kit.css?v=2.0.3';
import '../../../assets/assets-for-demo/demo.css';
import '../../../assets/assets-for-demo/vertical-nav.css';

//import background from 'https://storage.googleapis.com/mypoint/img/wetransfer-9ae71d/Guatape_08_2018.jpg';
import background from '../../../assets/img/guatape_02948_.jpg';

import experiences from '../../../assets/img/experiences.jpg';
import hotel from '../../../assets/img/hotel.jpg';
import restaurante from '../../../assets/img/restaurante.jpg';

import header_logo from '../../../assets/img/header_logo_02.png';

import icLocation from '../../../assets/img/ic_location.png';

import Autosuggest from 'react-autosuggest';

import axios from 'axios';
import ExperienceUI from "../../components/ExperienceUI/index.jsx";
import BasicSection from "../../components/BasicSection/index.jsx";
import ImageSection from "../../components/ImageSection/index.jsx";
import BlogSection from "../../components/BlogSection/index.jsx";
import ExperienceBlogUI from "../../components/ExperienceBlogUI/index.jsx";
import ExperienceImageUI from "../../components/ExperienceImageUI/index.jsx";

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'Guatapé - Antioquia',
    value: 1972
  },
  {
    name: 'Rionegro - Antioquia',
    value: 2012
  },
  {
    name: 'Ceja - Antioquia',
    value: 2012
  },
  {
    name: 'Carmen - Antioquia',
    value: 2012
  },
  
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    <img src={icLocation} style={{width:24}}></img><a href="#">{suggestion.name}</a>
  </div>
);

class Main extends React.Component {


    constructor() {
        super();
    
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
          value: ''
          , suggestions: []
          , sections: []
        };
      }
    
      onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
    
      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
      onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
      };
    
      // Autosuggest will call this function every time you need to clear suggestions.
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
         
        });
      };


    componentDidMount() {
        console.log("--componentDidMount");
        //cargar las sedes 
        const url = "http://35.202.20.44:8080/experience/page";
        axios.get(url)
        .then(res => {
          const dataResp = res.data;
          console.log("--OK ");
          
          var list = dataResp.sections.map(itemSection =>       
          <BasicSection title={itemSection.title}>
           {
            itemSection.sectionItems.map(itemExperience => 
                <ExperienceUI
                    title={itemExperience.title}
                    summary={itemExperience.summary}
                    tag={itemExperience.tags[0].name}
                    image={itemExperience.pictures[0]}
                    action="https://reactjs.org/"
                 >
                 
                </ExperienceUI>)
            }     
          </BasicSection>);
          
          this.setState({ sections: list});
          
        }).catch(error => {
          console.log("--Error: " + error);
        }).then(() => {
          // always executed
          console.log("--End request: ");
          
        });
    }



    render() {

        const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Prueba con <<Guatapé>>',
      value,
      onChange: this.onChange
    };


        return (
            <div>
        <div className="header-2">
            <nav className="navbar navbar-transparent navbar-absolute navbar-expand-lg">
                <div className="container">
                    {//<!-- Brand and toggle get grouped for better mobile display -->
                    }
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="#" >
                            <img src={header_logo} style={{width:140}}/>
                        </a>
                        <button type="button" className="ml-auto navbar-toggler" data-toggle="collapse" data-target="#navigation-example2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navigation-example2">
                        <ul className="navbar-nav navbar-center ml-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Acerca de nosotros
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Servicios
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Contáctanos
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                           
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="fa fa-facebook-square"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            

            <div className="page-header header-filter" style={{backgroundImage: `url(${background})`}}>
                <div className="container">
            

                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h1 className="title"> Vive nuevas experiencias!</h1>
                            <h4>Ahora puedes encontrar miles de experiencias en el Oriente de Antioquia.</h4>
                        </div>
                        <div className="col-md-10 ml-auto mr-auto">
                            <div className="card card-raised card-form-horizontal">
                                <div className="card-body ">
                                    <form method="" action="">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <div className="form-group">
                                                <Autosuggest
                                                    suggestions={suggestions}
                                                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                                    getSuggestionValue={getSuggestionValue}
                                                    renderSuggestion={renderSuggestion}
                                                    inputProps={inputProps}
                                                    theme={{border: "none !important"}}
                                                    className="form-control"
                                                    style={{border: "none !important", backgroundImage:"none !important"}} 
                                                />

                                                   {// <input type="text" placeholder="Prueba con Guatapé" className="form-control" style={{outline: "none !important", backgroundImage:"none !important"}/>
                                                   } 
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-2">
                                                <a className="nav-link" href="#" role="tab" data-toggle="tab" aria-selected="false" style={{textAlign: "center"}}>
                                                    <i className="material-icons">search</i>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="section ">
            <div className="container">

            <div className="row">
                <div className="col-md-6 ml-auto mr-auto text-center">
                    <div className="row">
                        <div className="col-sm-2">
                            <a href="#" >
                                <h4>Experiencias</h4>
                                <img src={experiences} alt="Circle Image" className="rounded-circle img-fluid"/>
                            </a>
                        </div>
                        <div className="col-sm-2 ml-auto">
                            <a href="#">
                                <h4>Alojamiento</h4>
                                <img src={hotel} alt="Circle Image" className="rounded-circle img-fluid"/>
                            </a>
                        </div>
                        <div className="col-sm-2 ml-auto">
                            <a href="#">
                                <h4>Restaurantes</h4>
                                <img src={restaurante} alt="Circle Image" className="rounded-circle img-fluid"/>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                    </div>
                </div>
                </div>
            </div>
            </div>


            {this.state.sections}

                

             <div className="subscribe-line">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="title">Get Tips &amp; Tricks every Week!</h3>
                        <p className="description">
                            Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
                        </p>
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>
            </div>
        </div>


        </div>
        );
    }
}

export default Main