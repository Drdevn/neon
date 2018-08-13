import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neon-main',
  templateUrl: './neon-main.component.html',
  styleUrls: ['./neon-main.component.scss']
})
export class NeonMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  playAudio() {
    const audio = new Audio();
    audio.src = '../../assets/sounds/button-3.mp3';
    audio.load();
    audio.play();
  }

}
