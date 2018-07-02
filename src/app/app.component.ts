import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  images: any[] = [
    '../assets/images/tshirts/blue.jpg',
    '../assets/images/tshirts/red.jpg',
    '../assets/images/tshirts/green.jpg'
  ];

  adjustImagePositionInputFront: number = 100;
  adjustImagePositionInputBack: number = 100;
  uploadedImageFront: any;
  fileNameFront: string;
  uploadedImageBack: any;
  fileNameBack: string;
  selectedTshirtImage = '../assets/images/tshirts/blue.jpg';
  imageFront: boolean = false;

  onFileChange(event) {
    if (event.target.files[0]) {
      this.imageFront ? this.fileNameFront = event.target.files[0].name : this.fileNameBack = event.target.files[0].name;
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageFront ? this.uploadedImageFront = event.target.result : this.uploadedImageBack = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  public imagePositionChange(event: any) {
    this.imageFront ? this.adjustImagePositionInputFront = parseInt(event.srcElement.value) + 100 : this.adjustImagePositionInputBack = parseInt(event.srcElement.value) + 100;
  }
}
