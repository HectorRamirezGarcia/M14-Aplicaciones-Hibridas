import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-addplaylist',
  templateUrl: './formulario-addplaylist.page.html',
  styleUrls: ['./formulario-addplaylist.page.scss'],
})
export class FormularioAddplaylistPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nom;
  tipus;

  addPokemon(){
      let data = {
        nom: this.nom,
        tipus: this.tipus
      }
      console.log(data.nom, data.tipus);
  }


}
