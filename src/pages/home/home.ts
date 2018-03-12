import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  name1 = "Moshe";
  name2 = "Masha";
  get score() {
    var concat = (this.name1 + this.name2).toLowerCase(); //ts is even more strict than java woot?!?!?
    //concat = "MosheMasha"
    var sum = 0;
    var arr = concat.split(""); //->['M','o','s','h','e','M','a','s','m','a']

    arr.forEach(letter => {
      sum += letter.charCodeAt(0);
    });

    return sum % 101;
  }

  constructor(public navCtrl: NavController) {}
}
