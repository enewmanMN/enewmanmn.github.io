import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import { Main, Container, NgParticlesModule } from 'ng-particles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
})
export class HomeComponent implements OnInit {

  id = "tsparticles";
    
  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";
  
  /* or the classic JavaScript object */
  particlesOptions = {
    "background": {
      "color": {
        "value": "#0d47a1"
      },
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    },
    "fullScreen": {
      "enable": true,
      "zIndex": 1
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "onHover": {
          "enable": true,
          "mode": "grab",
          "parallax": {
            "enable": true,
            "force": 60
          }
        }
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "duration": 2,
          "opacity": 0.8,
          "size": 40
        },
        "grab": {
          "distance": 400
        }
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff"
      },
      "links": {
        "color": {
          "value": "#ffffff"
        },
        "distance": 150,
        "enable": true,
        "opacity": 0.4
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "enable": true,
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        }
      },
      "number": {
        "density": {
          "enable": true
        }
      },
      "opacity": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 0.1,
          "max": 0.5
        },
        "animation": {
          "enable": true,
          "speed": 3,
          "minimumValue": 0.1
        }
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 0.1,
          "max": 10
        },
        "animation": {
          "enable": true,
          "speed": 20,
          "minimumValue": 0.1
        }
      }
    }
  };

  particlesLoaded(container: Container): void {
      console.log(container);
  }
  
  particlesInit(main: Main): void {
      console.log(main);
      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
