import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Car } from 'src/app/models/car';
import { Image } from 'src/app/models/image';
import { Make } from 'src/app/models/make';
import { Model } from 'src/app/models/model';
import { ApiService } from 'src/app/shared/api/api.service';
 import { TokenService } from 'src/app/shared/auth/token.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [MessageService]
})
export class AddComponent implements OnInit {
  model_id : any ;
  val: number;
  value : Date ;
  car!: any ;
  models!:any  ;
  makes!:any  ;
  CarForm: FormGroup;
  errors:any = null;
  data : any ;
  Model : Model = new Model ;
  Make : Make = new Make ;
  selectedModel : any ;
  selectedMake : any ;
  m : any ;
  mk : any ;
  user : any;

  files: File[] = [];
  uploadedFiles: any[] = [];
  Files: any[] = [];
  Image: Image = new Image;



  constructor(public api: ApiService ,
              public cars: VehiculeService ,
              public fb: FormBuilder,
              private tokenStorage: TokenService ,

              public messageService: MessageService,
    ) {
      this.CarForm = this.fb.group({
        km: [''],
        options: [''],
        matricule: [''],
        Price_H: [''],
        Price_D: [''],
        location: [''],
        model_id: [''],
     //   galleries:this.uploadedFiles ,
        user_id: this.tokenStorage.getUser().user.id,
      });
  };
  ngOnInit(): void {


      this.user = this.tokenStorage.getUser().user;
    //  console.log(this.user) ;


      this.cars.getAllMakes().subscribe(
        (res)=> {this.makes = res ; },
        (error) => { console.log(error.error) ; },
      );




  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {

    console.log(event);

    this.files.splice(this.files.indexOf(event), 1);

}


onUpload(event) {


  for(let file of event.files) {
    this.Image.name = file.name ;
    this.Image.path = "assets/img/cars/"+file.name ;
    this.Image.size = file.size ;
    this.uploadedFiles.push(this.Image);

    //console.log(file.name) ;

     }


    console.log(this.uploadedFiles) ;
   /* const formData =  new  FormData();
    for  (var i =  0; i <  this.uploadedFiles.length; i++)  {
      formData.append("file[]",  this.uploadedFiles[i]);*/
  //}
  this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}



  showSuccess(detail) {
    this.messageService.add({severity:'success', summary: 'Success', detail: detail});
}

showError(detail) {
  this.messageService.add({severity:'error', summary: 'Error', detail: detail});
}


  breadcrumb = [
    {
        title: 'Hi ' +this.tokenStorage.getUser().user.username,
        subTitle: 'Dashboard'
    }


];

    public select(event){
      this.selectedModel = event.target.value; console.log(this.selectedModel);
      let id = this.selectedModel ;
       this.cars.getModel(id).subscribe(data =>{ this.m = data ; this.Model=this.m ;  console.log(this.Model) ;});

    }

    public selectMake(event){
      this.selectedMake = event.target.value; console.log(this.selectedMake);
      let id = this.selectedMake ;
       this.cars.getMake(id).subscribe(data =>{ this.mk = data ;
                                                this.Make=this.mk ;
                                                this.models = this.mk.model ;
                                                console.log(this.mk) ;



                                              });

    }






    public create()
    { this.data = this.CarForm.value ;
      let f = this.uploadedFiles ;

      this.data.galleries = f ;
      console.log(this.data) ;

        this.cars.create(this.data).subscribe(
          (res)=>
          {console.log(res ) ;
          this.car = res ;
          this.CarForm.reset();
          this.showSuccess('Vehicule a été ajouté avec success') ;


          },
          (error) => {
            this.errors = error.error;
            console.log(this.errors) ;
            this.showError('Vérifier les champs obligatoires') ;
          },
          () => {  window.location.reload();
          }
        );

    }
}
