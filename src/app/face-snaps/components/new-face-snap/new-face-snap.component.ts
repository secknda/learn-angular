import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable,tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.css']
})
export class NewFaceSnapComponent implements OnInit {

  snapform!:FormGroup;
  faceSnapPreview$!:Observable<FaceSnap>;
  urlRegex!:RegExp;
  
  constructor(private formBuilder:FormBuilder,
    private facSnapsService:FaceSnapService,
    private router:Router) { }

  ngOnInit(): void {
   

    this.snapform=this.formBuilder.group({
      title:[null,[Validators.required]],
      description:[null,[Validators.required]],
      imageUrl:[null,[Validators.required,Validators.pattern(this.urlRegex)]],
      location:[null]
    },{
      updateOn:'blur' //émettre uniquement lorsque l'utilisateur change de champ, c'est-à-dire lors du  blur  des différents champs
    });
    this.faceSnapPreview$=this.snapform.valueChanges.pipe(
      map(formValue=>({
        ...formValue,
        createDate:new Date(),
        snap:0,
        id:0
      }))
    );
    //verfier l'url
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
  }

  onSubmitForm(){
   this.facSnapsService.addFaceSnap(this.snapform.value).pipe(
     tap(()=> this.router.navigateByUrl('/facesnaps'))
   ).subscribe();
   
  }

}
