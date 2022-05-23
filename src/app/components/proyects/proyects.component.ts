import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


    data:any =  [{
            "_id": 1,
            "name": "Peliculas",
            "img":"https://pbs.twimg.com/media/Eu_nBREXYAosHdP.jpg:large",
            "language": "HTML-CSS-PHP"
    },
       {
        "_id": 2,
        "name": "Evolution Systems",
        "language": "HTML-CSS-TypeScrit-Angular",
        "img": "../../../assets/img/logo.jpeg"
       },
       {
        "_id": 3,
        "name": "Links favoritos",
        "language": "Nodejs- Express",
        "img": "../../../assets/img/links.png"
       },
       {
        "_id": 3,
        "name": "Portafolio",
        "language": "Angular",
        "img": "../../../assets/img/img-potafolio.png"
       }
    ]


}
