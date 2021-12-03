import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  

  images: string[] = ['/assets/img/slider1.jpg', '/assets/img/slider2.jpg'];

  backgroundImage: string = '';

  tabs = "tabs";
    constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    let ran = Math.floor(Math.random() * (2 - 0)) + 0;
    console.log(ran, Math.random()*100)
    this.backgroundImage = this.images[ran];
  }

  @ViewChild('mySlider')  slides: IonSlides;

    swipeNext(){
      this.slides.slideNext();
    }

}
