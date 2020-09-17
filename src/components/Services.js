import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";


export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail></FaCocktail>,
                title:"Free Cocktail",
                info: 'Lorem Ipsum asdas fgiu afdsbf ljdsa ajdsgad asda , ajdg ergfo fdsdfygsdf asdadadfa!!!'
            },
            {
                icon:<FaHiking></FaHiking>,
                title:"Hiking Facility",
                info: 'Lorem Ipsum asdas fgiu afdsbf ljdsa ajdsgad asda , ajdg ergfo fdsdfygsdf asdadadfa!!!'
            },
            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title:"Shuttle Van",
                info: 'Lorem Ipsum asdas fgiu afdsbf ljdsa ajdsgad asda , ajdg ergfo fdsdfygsdf asdadadfa!!!'
            },
            {
                icon:<FaBeer></FaBeer>,
                title:"Strongest Beer",
                info: 'Lorem Ipsum asdas fgiu afdsbf ljdsa ajdsgad asda , ajdg ergfo fdsdfygsdf asdadadfa!!!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services"></Title> 
               <div className="services-center">
                   {this.state.services.map((item,index) => {
                       return <article key={index} className="service">
                           <span>{item.icon}</span>
                   <h6>{item.title}</h6>
                   <p>{item.info}</p>
                       </article>
                   } )}
               </div>
            </section>
            
        )
    }
}
