import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  countryList: any = [
    { countryName: "USA", states: [{ name: "LA", src: "../../assets/images/la.jpeg" }, { name: "NYC", src: "../../assets/images/nyc.jpeg" }] },
    { countryName: "India", states: [{ name: "Gujarat", src: "../../assets/images/gujarat.jpeg" }, { name: "Delhi", src: "../../assets/images/delhi.jpeg" }] }
  ];
  stateList: any = [];
  index: number = 0;
  stateSelected: string;
  countryForm: FormGroup;
  countryControl: FormControl;
  stateControl: FormControl;
  constructor(private fb: FormBuilder) {
    this.countryForm = this.fb.group({
      countryControl: [this.countryList[0].countryName],
      stateControl: [this.countryList[0].states[0].name]
    });
  }

  ngOnInit() {
    this.onCountrySelected(this.countryList[0].countryName);
  }
  getStateList(countryName: string) {
    return this.countryList.filter((country) =>
      country.countryName == countryName
    )[0].states;
  }
  onCountrySelected(countryName: string) {
    this.stateList = null;
    this.stateList = this.getStateList(countryName);
    this.stateSelected = this.stateList[0].name;
    this.countryForm.controls.stateControl.setValue(this.stateList[0].name);
    this.index = 0;
  }
  onStateSelected(stateName: string) {
    this.stateSelected = stateName;
    this.index = this.getIndex(stateName);
  }
  getIndex(stateName: string) {
    return this.stateList.findIndex(state => state.name == stateName);
  }
  getStateName(index: number) {
    return this.stateList[index].name;
  }
  previousImg() {
    if (this.index - 1 >= 0) {
      this.changeImg(--this.index);
    } else {
      this.index = this.stateList.length - 1;
      this.changeImg(this.index);
    }
  }
  nextImg() {
    if (this.index + 1 < this.stateList.length) {
      this.changeImg(++this.index);
    } else {
      this.index = 0;
      this.changeImg(this.index);
    }
  }
  changeImg(index: number) {
    this.stateSelected = this.getStateName(index);
    this.countryForm.controls.stateControl.setValue(this.stateSelected);
  }
}
