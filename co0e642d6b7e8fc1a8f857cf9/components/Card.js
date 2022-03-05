import React from 'react';


export default function Card(props){
return(
      <div className="parent">
    
    <div className="container">
   <img className="card--img" src={props.imageUrl} />
    </div>
     
    <div className="container-2"> 
    <div className='container-3'>
    <img src="https://w7.pngwing.com/pngs/1002/1014/png-transparent-google-map-maker-google-maps-computer-icons-pin-red-and-white-logo-angle-heart-map.png" width="7px" className="card--logo"/>
    <span className="card--location">{props.location}</span>
    <a href={props.googleMapsUrl} target="_blank">
    <span className="card--map">View On Google Map</span></a>
    </div>
    
    <h2 className="card--title">{props.title}</h2>
    
    <h4>
    <span>{props.startDate} - </span>
    <span>{props.endDate}</span></h4>
    
    <p className="card--description">{props.description}</p></div>
    
       </div> 
   
)
}