import { Component,OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!:FaceSnap;
  
  buttonText!:string;
  constructor(private faceSnapService:FaceSnapService,
    private router:Router){}

  ngOnInit(): void {
  this.buttonText='👍'
   }

  OnSnap(){
    if(this.buttonText=='👍'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.buttonText='👎';
    }
    else{
      
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonText='👍';
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}


}
