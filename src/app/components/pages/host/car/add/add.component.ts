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
import { OptionsService } from 'src/app/shared/vehicules/options.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [MessageService]
})
export class AddComponent implements OnInit {
  model_id : any ;
  id :any;
  val: number;
  value : Date ;
  car!: any ;
  models!:any  ;
  makes!:any  ;
  opts: any;
  CarForm: FormGroup;
  errors:any = null;
  data : any ;
  Model : Model = new Model ;
  Make : Make = new Make ;
  selectedModel : any ;
  selectedMake : any ;
  m : any ;
  ok: boolean = true;
  mk : any ;
  user : any;
  choices:any = [];
  selectedoptions:any =[];
  files: File[] = [];
  uploadedFiles: any[] = [];
  Files: any[] = [];
  Image: Image= new Image;
  options : any[] ;



  constructor(public api: ApiService ,
              public cars: VehiculeService ,
              public fb: FormBuilder,
              private tokenStorage: TokenService ,
              public optionservice: OptionsService,
              public messageService: MessageService,
    ) {
      this.CarForm = this.fb.group({
        km: [''],
        options: this.options,
        matricule: [''],
        Price_H: [''],
        Price_D: [''],
        location: [''],
        model_id: [''],
        portes: [''],
        carburant: [''],
        transmission: [''],
        siege: [''],
        description: [''],
        photo: this.uploadedFiles[0] ,
        galleries:this.uploadedFiles ,
        user_id: this.tokenStorage.getUser().user.id,
      });
  };




  ngOnInit(): void {


      this.user = this.tokenStorage.getUser().user;
      this.cars.getAllMakes().subscribe(
        (res)=> {this.makes = res ;},
        (error) => { console.log(error.error) ; },
      );
      this.optionservice.getOptions().subscribe(
        (res)=> {this.opts = res ;
          console.log(this.opts);},
        (error) => { console.log(error.error) ; },
      );



                 }

                 public portes = [
                  {nombre:"2"},
                  {nombre:"3"},
                  {nombre:"4"},
                  {nombre:"5"},
                    ];

                  public carburant = [
                    {label:"Essence"},
                    {label:"Diesel"},
                    {label:"Hybride"},
                    {label:"Électrique"},
                   ];


                  public siege = [
                    {nombre:"2"},
                    {nombre:"3"},
                    {nombre:"4"},
                    {nombre:"5"},
                    {nombre:"6"},
                    {nombre:"8"},
                   ];



                   public transmission = [
                    {label:"Manuelle"},
                    {label:"Automatique"},

                   ];


  onchange(event){

   // console.log(event);
    //console.log(event.target.value);
    this.id=event.target.value;
    let j = 0;
    let i =0;
    for (let i = 0; i< this.selectedoptions.length; i++)
      {
        if (this.id==this.selectedoptions[i])
      { delete this.selectedoptions[i];
        this.selectedoptions = this.selectedoptions.filter(item => item);
        j++;
       }


      }

      if(j==0){
        this.selectedoptions.push(this.id);

      }
      console.log(this.selectedoptions);
      this.options = this.selectedoptions ;
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
//  console.log(event);

  let image: any ;
  let file

    for  (var i =  0; i <  event.files.length; i++)  {
     file = event.files[i] ;

    image = {"name":file.name , "path" :"assets/img/cars/"+file.name , "size" :file.size }
    this.uploadedFiles.push(image);
     }


    console.log(this.uploadedFiles) ;
  const formData =  new  FormData();
    for  (var i =  0; i <  this.uploadedFiles.length; i++)  {
      formData.append("file[]",  this.uploadedFiles[i]);
  }
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
      console.log(event);
      this.selectedModel = event.target.value; console.log(this.selectedModel);
      let id = this.selectedModel ;
       this.cars.getModel(id).subscribe(data =>{this.m = data ;  this.Model=this.m ;  console.log(this.Model) ;});

    }

    public selectMake(event){
      console.log(event);
      this.selectedMake = event.target.value; console.log(this.selectedMake);
      let id = this.selectedMake ;
       this.cars.getMake(id).subscribe(data =>{ console.log(data);
                                                this.mk = data ;
                                                this.models = this.mk.model ;
                                              });

    }






    public create()
    {

       this.data = this.CarForm.value ;
      let f = this.uploadedFiles ;
      let o = this.options  ;
      this.data.galleries = f ;
      this.data.photo = f[0].path ;
      this.data.options = o ;
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
