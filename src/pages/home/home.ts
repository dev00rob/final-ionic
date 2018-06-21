import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  robsWords: string;

  constructor(
    public navCtrl: NavController, 
    private tts: TextToSpeech,
    public navParams: NavParams
  ) {

  }

  robsText(){
    this.tts.speak(this.robsWords)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

}
