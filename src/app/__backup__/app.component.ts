import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { S3UploaderServiceService } from './services/s3-uploader-service/s3-uploader-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Document Uploader';
  
  files: File[] = []; 
  renderImages: any = []; 
  randomiser = 100000000000000000; 

  constructor(
    private s3UploaderService: S3UploaderServiceService,
    private toaster: ToastrService
  ) {}

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  //TODO: replace with uploading CSV and Excel files! and also show the files from the s3 bucket as well!
  async onImageUpdate() {
    console.log("Updating Files: ", this.files); 
    //Tell user to update with image first
    if(this.files.length < 1) {
      this.toaster.error("Please 'Select Drop' your image first");
      return;
    }

    for (let i=0; i<this.files.length; i+=1) {
      let file = this.files[i]; 
      //Randomiser allows name to be truly unique for each file to avoid accidental overwriting
      let filePath = 'images/' + (Math.random() * this.randomiser) + '_' + file.name;  

      try {
        //Attempt to upload each file to S3 bucket and provide feedback to user accordingly through Toastr
        let response = await this.s3UploaderService.uploadFile(file, filePath); 
        console.log("Upload action completed with response: " + response); 

        this.toaster.success(file.name + 'successfully uploaded'); 
        const url = (response as any).Location; 
        this.renderImages.push(url); 
      } catch (error) {
        this.toaster.error('Files failed to upload with error:' + error); 
      }
    }

    //reset files array to empty to redo process with new files
    this.files = []; 
  }
}
