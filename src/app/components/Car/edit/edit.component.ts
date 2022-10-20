import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { Image } from 'src/app/models/image';
import { Make } from 'src/app/models/make';
import { Model } from 'src/app/models/model';
import { ApiService } from 'src/app/shared/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/shared/auth/token.service';
import { VehiculeService } from 'src/app/shared/vehicules/vehicule.service';
import { OptionsService } from 'src/app/shared/vehicules/options.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class EditComponent implements OnInit {
  model_id : any ;
  id :any;
  val: number;
  value : Date ;
  car!: any ;
  selectedcar:any;
  carid:any;
  models!:any  ;
  makes!:any  ;
  opts: any;
  editForm: FormGroup;
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
  uploadedF: any[] = [];
  Files: any[] = [];
  Image: Image= new Image;
  options : any[] ;
  displayBasic: boolean;
  displayBasic2: boolean;
  displayCustom: boolean;
  activeIndex: number = 0;
  isLoading : boolean = false ;
  OnUpload = false ;
  gridListings: number = 1;
  TotalImages ;
  //link = "https://7rentals.com/backend/public/storage/image/vehicule/" ;
  link = "http://127.0.0.1:8000/storage/image/vehicule/" ;
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

images: any;


  constructor(
    public api: ApiService ,
    public cars: VehiculeService ,
    public fb: FormBuilder,
    private tokenStorage: TokenService ,
    public optionservice: OptionsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router

  ) {    }


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.carid=params['id'];
      console.log(this.carid);
    }) ;

    this.user = this.tokenStorage.getUser().user;
      this.cars.getAllMakes().subscribe(
        (res)=> {this.makes = res ;
        console.log(res);},
        (error) => { console.log(error.error) ; },
      );
      this.optionservice.getOptions().subscribe(
        (res)=> {this.opts = res ;
          //console.log(this.opts);
        },
        (error) => { console.log(error.error) ; },
      );
      this.cars.get(this.carid).subscribe(
        (res)=> {this.selectedcar = res ; this.selectedMake = this.selectedcar.make.model ;
        console.log(this.selectedcar);
      //  this.TotalImages = this.selectedcar ;
        this.cars.getMake(this.selectedcar.make.id).subscribe(data =>{ console.log(data);
          this.mk = data ;
          this.models = this.mk.model ;
          //console.log(this.models) ;
          this.cars.getModel(this.selectedcar.make.model).subscribe(data =>{
            this.m = data ;
            this.Model=this.m ;
            //console.log(this.Model) ;
          });
        });

      } ) ;



      this.FetchVehiculeGallerie() ;
      this.createEditForm() ;


  }

  createEditForm ()
  {
this.editForm = this.fb.group({
    km: [''],
    options: this.options,
    matricule:  [''],
    Price_H: [''],
    Price_D: [''],
    location: [''],
    model_id: [''],
    make: [''],
    portes: [''],
    carburant: [''],
    transmission: [''],
    siege: [''],
    description: [''],
    bail: 500,
    photo: this.uploadedFiles[0] ,
    galleries:this.uploadedFiles ,
    user_id: this.tokenStorage.getUser().user.id,
  });
  }
  breadcrumb = [
    {
        title: 'Hi ' +this.tokenStorage.getUser().user.username,
        subTitle: 'Dashboard'
    }
  ];
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
   filedata:any;

   fileEvent(e){
    let photoprincipal =new FormData();
     this.filedata = e.target.files[0];
     photoprincipal.append("img",this.filedata,this.filedata.name);
     console.log( this.filedata);
     console.log( photoprincipal);

     this.cars.updatedphoto(this.carid,photoprincipal).subscribe(data =>{ console.log(data);


    });
   }



   onUpload(event) {
               console.log(event);
              this.OnUpload = true ;
                let image: any ;
                let file
                const images =  new  FormData();
                if (event.files.length == 0)
                {
                  this.showError("L'upload des images est obligatoires !")
                }
                else
                  { for  (var i =  0; i <  event.files.length; i++)  {
                    file = event.files[i] ;
                    this.uploadedF.push(file);
                  image = {"name":file.name , "path" :file.name , "size" :file.size }
                  this.uploadedFiles.push(image);

                  //images.append("gal[]",  image);


                  console.log(this.uploadedFiles) ;
                    }
                 }

                  for  (var i =  0; i <  this.uploadedF.length; i++)  {
                    images.append("img",  this.uploadedF[i]);
                 this.storeImages(images) ;
                }




     this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
   }



     showSuccess(detail) {
       this.messageService.add({severity:'success', summary: 'Success', detail: detail});
   }

   showError(detail) {
     this.messageService.add({severity:'error', summary: 'Error', detail: detail});
   }






       public selectMake(event){
         console.log(event);
         this.selectedMake = event.target.value; console.log(this.selectedMake);
         let id = this.selectedMake ;
          this.cars.getMake(id).subscribe(data =>{ console.log(data);
                                                   this.mk = data ;
                                                   this.models = this.mk.model ;
                                                   console.log(this.models) ;
                                                 });

       }


       public select(event){
        console.log(event);

        this.selectedModel = event.target.value; console.log(this.selectedModel);
        let id = this.selectedModel ;
         this.cars.getModel(id).subscribe(data =>{this.m = data ;  this.Model=this.m ;  console.log(this.Model) ;});

      }



       public update()
       {
        /* console.log( this.uploadedF) ;
         const photoprincipal =new FormData();
         photoprincipal.append("img",this.filedata,this.filedata.name);

         const images =  new  FormData();
         for  (var i =  0; i <  this.uploadedF.length; i++)  {
           images.append("gal[]",  this.uploadedF[i]);

       }
*/

          this.data = this.editForm.value ;
         let f = this.uploadedFiles ;
         let o = this.options  ;
     /*    this.data.galleries = f ;
         this.data.photo = this.filedata.name;
         this.data.options = o ;*/
         console.log(this.data) ;



         const formData = new FormData();

        // if(this.OnUpload)
       //  formData.append("img",this.filedata,this.filedata.name);
     //  {
        this.cars.update(this.carid,this.data).subscribe(
             (res)=>
             {
               //this.store(photoprincipal) ;
               // this.storeImages(images) ;
               /*for  (var i =  0; i <  this.uploadedF.length; i++)  {
                 formData.append("img",  this.uploadedF[i]);
                 this.store(formData) ;
                }*/


               console.log(res ) ;
             this.car = res ;
             this.editForm.reset();
             this.showSuccess('Vehicule a été modifié avec success') ;
             this.router.navigate(['/user/list']);


             },

           );//}
         /*else
         {this.showError('Veillez cliquez sur upload pour enregistrer les photos de vehicules ')}*/
       }



       store(data)
       {
         this.cars.storeImage(data).subscribe(
           (data)=> console.log(data)) ;
       }


       storeImages(data)
       {
         this.cars.storeNewImages(this.carid,data).subscribe(
           data=> {console.log("Done")},
           error=>{ console.log(error)}) ;
       }



       FetchVehiculeGallerie()
       {
         this.cars.getGallerie(this.carid).subscribe(
           (res)=> {

            this.images = res ;
            this.TotalImages = this.images.length  ;
            console.log(this.TotalImages) ;
           });
       }

       onPageChange(event) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
    }



       imageClick(index: number) {
         this.activeIndex = index;
         this.displayCustom = true;
     }

     deleteimage(item: any) {
       this.confirmationService.confirm({
         message: 'Do you want to delete this record?',
         header: 'Delete Confirmation',
         icon: 'pi pi-info-circle',
         accept: () => {
           this.cars.deleteGallerie(item.id).subscribe(
             (res)=> {    this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
             this.FetchVehiculeGallerie() ;
              console.log(res);
             });

         },
         reject: (type) => {
             switch(type) {
                 case ConfirmEventType.REJECT:
                     this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                 break;
                 case ConfirmEventType.CANCEL:
                     this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                 break;
             }
         }
     });

      console.log(item) ;
   }


}
