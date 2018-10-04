import React from 'react';
import ReactDOM from 'react-dom';

import Main from "./views/main/index.jsx";

import '../assets/css/material-kit.css?v=2.0.3';
import '../assets/assets-for-demo/demo.css';
import '../assets/assets-for-demo/vertical-nav.css';

//import background from '../assets/img/bg8.jpg';
import background from '../assets/img/guatape_02948.jpg';

//import dg6 from '../assets/img/dg6.jpg';
import dg6 from '../assets/img/guatape_01.jpg';

//import dg9 from '../assets/img/dg9.jpg';
import dg9 from '../assets/img/cuatritours.png';
//import dg10 from '../assets/img/dg10.jpg';
import dg10 from '../assets/img/guatape_02.jpg';

//import bg7 from '../assets/img/bg7.jpg';
import bg7 from '../assets/img/salto_tequendamita.jpg';

//import blog4 from '../assets/img/card-blog4.jpg';
import blog4 from '../assets/img/cafe_retiro.jpg';
//import blog5 from '../assets/img/blog5.jpg';
import blog5 from '../assets/img/salto_ceja.jpg';
//import blog7 from '../assets/img/blog7.jpg';
import blog7 from '../assets/img/iglesia.jpg';
import blog8 from '../assets/img/blog8.jpg';

import experiences from '../assets/img/experiences.jpg';
import hotel from '../assets/img/hotel.jpg';
import restaurante from '../assets/img/restaurante.jpg';

import header_logo from '../assets/img/header_logo_02.png';

import aventura_01 from '../assets/img/aventura_01.jpg';
import aventura_02 from '../assets/img/aventura_02.jpg';
import aventura_03 from '../assets/img/aventura_03.jpg';

import caminata_01 from '../assets/img/caminata_01.png';
import caminata_02 from '../assets/img/caminata_02.png';
import caminata_03 from '../assets/img/caminata_03.png';


ReactDOM.render(
    (
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
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
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
                                                    <input type="text" placeholder="Prueba con Guatapé" className="form-control" style={{outline: "none !important", backgroundImage:"none !important"}}/>
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

        <div className="section">
        <div className="container">

            <h2 className="section-title">Lo mejor del oriente Antioqueño</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-blog">
                        <div className="card-header card-header-image">
                            <a href="#">
                                <img src={dg6} alt=""/>
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category text-rose">Recorrido</h6>
                            <h4 className="card-title">
                                <a href="#">Tour Guatpé</a>
                            </h4>
                            <p className="card-description">
                                Descubre un pueblo mágico, lleno de color e historia. Disfruta de los maravillosos paisajes que ofrece Guatapé y la vista panorámica desde la cima de la piedra. Conoce la historia de su pintoresco pueblo y siente la brisa observando el embalse durante el paseo en bote....
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-blog">
                        <div className="card-header card-header-image">
                            <a href="#">
                                <img src={dg10} alt=""/>
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category text-rose">Aventura</h6>
                            <h4 className="card-title">
                                <a href="#">Una parada para contemplar el infinito</a>
                            </h4>
                            <p className="card-description">
                            Este lugar tiene el encanto de esas construcciones en las que uno lo piensa más de dos veces si subirse o no. La pieda tiene una escalera que parece un cordón de amarre de esos vestidos de época. Está enclavada en la mitad de la represa de Guatapé. La piedra está a una hora de Medellín, la segunda ciudad más importante del país...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-blog">
                        <div className="card-header card-header-image">
                            <a href="#">
                                <img src={dg9} alt=""/>
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category text-rose">Aventura</h6>
                            <h4 className="card-title">
                                <a href="#">Tour en cuatrimoto</a>
                            </h4>
                            <p className="card-description">
                            Disfruta con nuestro grupo o arma tu equipo con tus amigos y vive la experiencia de conducir una Cuatrimoto por un circuito lleno de emoción, recorriendo caminos veredales en el municipio de Rionegro, en la exclusiva zona de Llano Grande, a 50 minutos de Medellín.
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
                            
            <br />
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-plain card-blog">
                        <div className="card-header card-header-image">
                            <a href="#">
                                <img className="img img-raised" src={blog4}/>
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category text-info">Actividades al aire libre</h6>
                            <h4 className="card-title">
                                <a href="#">Cafe Retiro</a>
                            </h4>
                            <p className="card-description">
                            Estás a unos minutos de tomarte un café inolvidable en medio de las montañas de El Retiro. Conoce a nuestros pequeños caficultores y vive con ellos la experiencia de crear un café especial desde la semilla hasta la taza.Plantarás, recolectarás, trillarás, probarás nuestra gastronomía local además de catar, tostar y conocer diferentes métodos de preparación.
                                <a href="#"> Más... </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-plain card-blog">
                        <div className="card-header card-header-image">
                            <a href="#">
                                <img className="img img-raised" src={blog5}/>
                            </a>
                        </div>
                        <div className="card-body ">
                            <h6 className="card-category text-success">
                            Naturaleza y parques
                            </h6>
                            <h4 className="card-title">
                                <a href="#">Los Saltos Ecoparque</a>
                            </h4>
                            <p className="card-description">
                            Los Saltos Ecoparque es una zona natural donde puedes apreciar grandes saltos y cascadas de aguas, ubicado entre los municipios de La Ceja y Abejorral (Oriente Antioqueño), aproximadamente a una hora y media de Medellín, en donde se encuentran más de 10 saltos, cascadas, manantiales y nacimientos de agua; puedes además realizar contemplación de fauna y flora y avistamiento de aves.
                                <a href="#"> Más... </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-plain card-blog">
                        <div className="card-header card-header-image">
                            <a href="#">
                                <img className="img img-raised" src={blog7}/>
                            </a>
                        </div>
                        <div className="card-body ">
                            <h6 className="card-category text-danger">
                                Iglesias y catedrales
                            </h6>
                            <h4 className="card-title">
                                <a href="#">Iglesia San Antonio de Pereira</a>
                            </h4>
                            <p className="card-description">
                            Hermosa pequeña pintoresca iglesia colonial que data del Siglo XVII se encuentra preside la Plaza de la alegre y bulliciosa plaza de San Antonio de Pereira corregimiento de Rionegro Posee un fino retablo en exquisito laminilla de oro.
                                <a href="#"> Más... </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


                

        </div>
    </div>



<div className="team-4 section-image" style={{backgroundImage: `url(${bg7})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h2 className="title">Para aventureros</h2>
                            <h5 className="description">Si te consideras un aventurero nato y necesitas vivir miles de experiencias únicas que te cambien para siempre, no te pierdas estos destinos en el Oriente.</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-profile">
                                <div className="card-header card-avatar">
                                    <a href="#">
                                        <img className="img" src={aventura_01} />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Expedición San Carlos</h4>
                                    <h6 className="card-category text-muted">Torrentismo + Parapente + Trekking</h6>
                                    <p className="card-description">
                                    Ven y pasa un fin de semana agradable en compañía de tu familia o amigos, podrás practicar ecoturismo a través de recorridos y caminatas, turismo de aventura con actividades extremas como el Torrentismo y Parapente, además disfrutar de una buena noche de integración....
                                    </p>
                                </div>
                                <div className="card-footer justify-content-center">
                                    <a href="#" className="btn btn-just-icon btn-twitter btn-round"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="btn btn-just-icon btn-dribbble btn-round"><i className="fa fa-dribbble"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-profile">
                                <div className="card-header card-avatar">
                                    <a href="#">
                                        <img className="img" src={aventura_02} />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">	Día extremo El Santuario</h4>
                                    <h6 className="card-category text-muted">Canopi + Escalada en Muro + Rappel + Paintball</h6>
                                    <p className="card-description">
                                    Te gustaría vivir un día de total aventura disfrutando de un canopi de 800 mts de recorrido a 150 mts de altura o que tal disfrutar de un juego de paintball con tus amigos. Vive una aventura llena de adrenalina, en el Oriente Antioqueño...
                                    </p>
                                </div>
                                <div className="card-footer justify-content-center">
                                    <a href="#" className="btn btn-just-icon btn-dribbble btn-round"><i className="fa fa-dribbble"></i></a>
                                    <a href="#" className="btn btn-just-icon btn-twitter btn-round"><i className="fa fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-profile">
                                <div className="card-header card-avatar">
                                    <a href="#">
                                        <img className="img" src={aventura_03} />
                                    </a>
                                </div>
                                <div className="card-body ">
                                    <h4 className="card-title">Parapente En Cocorná</h4>
                                    <h6 className="card-category text-muted">Parapente</h6>
                                    <p className="card-description">
                                    Experimenta el placer de volar y disfruta del maravilloso paisaje que se extiende hasta el Magdalena medio, un vuelo tranquilo donde nos sentiremos en total libertad....
                                    </p>
                                </div>
                                <div className="card-footer justify-content-center">
                                    <a href="#" className="btn btn-just-icon btn-dribbble btn-round"><i className="fa fa-dribbble"></i></a>
                                    <a href="#" className="btn btn-just-icon btn-twitter btn-round"><i className="fa fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blogs-3">
                <div className="container">
                    <div className="row">
                       
                            <h2 className="title">Si te gusta caminar</h2>
                            <br />
                            <div className="card card-plain card-blog">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-header card-header-image">
                                            <img className="img img-raised" src={caminata_01}/>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h6 className="card-category text-info">Bosques y Cavernas</h6>
                                        <h3 className="card-title">
                                            <a href="#">San Luis</a>
                                        </h3>
                                        <p className="card-description">
                                        En ésta ruta caminera es posible disfrutar de atractivos como arroyos, quebradas, ríos y caídas de aguas cristalinas. Se encuentra en el cinturón del Magdalena Medio, representado por grutas y cavernas que albergan especies propias de este tipo de ecosistemas, tales como los murciélagos y guácharos, así como aves dispersoras de semillas. 
                                            <a href="#"> Más... </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-plain card-blog">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-header card-header-image">
                                            <a href="#">
                                                <img className="img img-raised" src={caminata_02}/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h6 className="card-category text-danger">
                                        Piedras
                                        </h6>
                                        <h3 className="card-title">
                                            <a href="#">San Carlos</a>
                                        </h3>
                                        <p className="card-description">
                                        La ruta comprende bosque natural, cascadas de la quebrada El Tabor, avistamiento de aves como el águila cabeza gris y el turpial guajiro; al igual que un sendero con abundante vegetación, representado por los árboles dormilón y laurel-comino. El recorrido permite el contacto de los visitantes con espacios de gran interés ambiental tales como el Centro Ambiental San Antonio, la Estación Piscícola San Carlos, cascadas, la raíz de la piedra y la cima del monolito. 
                                            <a href="#"> Más...</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-plain card-blog">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card-header card-header-image">
                                            <a href="#">
                                                <img className="img img-raised" src={caminata_03}/>
                                            </a>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h6 className="card-category text-success">
                                        Biodiversidad y Cultura
                                        </h6>
                                        <h3 className="card-title">
                                            <a href="#">Sonsón </a>
                                        </h3>
                                        <p className="card-description">
                                        Es un recorrido por bosque de niebla, ideal para observar su fauna conformada por aves como el cóndor y el tucán esmeralda, y mamíferos como el cusumbo solo y los conejos silvestres. También es posible apreciar la riqueza de su flora, con especies como helechos, cardos, orquídeas, bromelias, los musgos que forman colchones de agua y los característicos frailejones. El destino también cuenta con quebradas cristalinas que se encuentran inmersas en medio de una zona boscosa y observatorios desde los que se puede divisar la cuenca del Río Aures, el Cerro de Las Papas y el Cerro Las Palomas, considerado como el punto más alto del denominado Páramo de Sonsón. 
                                            <a href="#"> Más... </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </div>
            </div>

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
    )
  ,document.getElementById('app')
);