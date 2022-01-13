import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-materialtable-app';
  notifications=2;
  showSpinner=false;
  opened=false;

  log(state: any){
    console.log(state);
  }

loadData(){
  this.showSpinner=true;
  setTimeout(()=>{
    this.showSpinner=false;
  },5000)
}
minDate=new Date();
maxDate=new Date(2019,3,10);



}
