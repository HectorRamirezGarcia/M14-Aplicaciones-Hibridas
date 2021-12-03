import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor() { }

  albums =  [{"name": "Latino",
                "birth_year": "19BBY",
                "img": "album1.jpg",
                "fav": 0
              },{"name": "Hip Hop",
                 "birth_year": "112BBY",
                 "img": "album2.jpg",
                 "fav": 0
              },{"name": "Rock",
                "birth_year": "33BBY",
                "img": "album3.jpg",
                "fav": 0
              },{"name": "Pop",
                "birth_year": "41.9BBY",
                "img": "album4.jpg",
                "fav": 0
              },{"name": "Colores",
                "birth_year": "19BBY",
                "img": "album5.jpg",
                "fav": 0
              },{"name": "Twenty One Pilots",
                "birth_year": "unknown",
                "img": "album6.jpg",
                "fav": 0
              },{"name": "Jhay Cortez",
                "birth_year": "57BBY",
                "img": "album7.jpg",
                "fav": 0
            }];

  ngOnInit() {
  }

}
