import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public images: any[] = [
    '../assets/images/tshirts/blue.jpg',
    '../assets/images/tshirts/red.jpg',
    '../assets/images/tshirts/green.jpg'
  ];

  public adjustImagePositionInput: number = 100;
  public uploadedImage: any;
  public fileName: string;
  public selectedTshirtImage = '../assets/images/tshirts/blue.jpg';

  onFileChange(event) {
    console.log(event.files);
    if (event.target.files[0]) {
      this.fileName = event.target.files[0].name;
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.uploadedImage = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public imagePositionChange(event: any) {

    this.adjustImagePositionInput = parseInt(event.srcElement.value) + 100;
    console.log(this.adjustImagePositionInput);
  }
}
