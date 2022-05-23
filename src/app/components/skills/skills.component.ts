import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  languages: any = [{
    "name":"HTML",
    "img":"../../../assets/img/language/html.png"
  },{
    "name":"CSS",
    "img":"../../../assets/img/language/css.png"
  },{
    "name":"JavaScript",
    "img":"../../../assets/img/language/js.png"
  },{
    "name":"Angular",
    "img":"../../../assets/img/language/angular.png"
  },{
    "name":"TypeScript",
    "img":"../../../assets/img/language/typescript.png"
  },{
    "name":"Node JS",
    "img":"../../../assets/img/language/node.png"
  },{
    "name":"PHP",
    "img":"../../../assets/img/language/php.png"
  },{
    "name":"MYSQL",
    "img":"../../../assets/img/language/mysql.png"
  },{
    "name":"JAVA",
    "img":"../../../assets/img/language/java.png"
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
