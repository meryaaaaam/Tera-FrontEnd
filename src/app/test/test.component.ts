import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [MessageService]
})
export class TestComponent implements OnInit {

  uploadedFiles: any[] = [];
  Files: any[] = [];

  constructor(private messageService: MessageService) {}


  ngOnInit(): void {
  }


  onUpload(event) {
    for(let file of event.files) {
       this.uploadedFiles.push(file.name);
        //console.log(file.name) ;
    }
console.log(this.uploadedFiles) ;

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

}
