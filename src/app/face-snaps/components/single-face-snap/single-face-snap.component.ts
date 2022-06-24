import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable , tap} from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.css']
})
export class SingleFaceSnapComponent implements OnInit {
  // faceSnap!:FaceSnap;
 faceSnap$!:Observable<FaceSnap>;
  
  buttonText!:string;
  constructor(private faceSnapService:FaceSnapService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
  this.buttonText='👍'
  const facesnapid= +this.route.snapshot.params['id'];
  this.faceSnap$=this.faceSnapService.getFaceSnapById(facesnapid);
   }

  OnSnap(faceSnapId:number){
    if(this.buttonText=='👍'){
     this.faceSnap$= this.faceSnapService.snapFaceSnapById(faceSnapId,'snap').pipe(
       tap(()=> this.buttonText='👎')
     );
     
      
    }
    else{
      
      this.faceSnap$=this.faceSnapService.snapFaceSnapById(faceSnapId,'unsnap').pipe(
        tap(()=>this.buttonText='👍' )
      );
      
    }
  }
}
