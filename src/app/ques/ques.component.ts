
import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-ques',
  templateUrl: './ques.component.html',
  styleUrls: ['./ques.component.css']
})
export class QuesComponent implements OnInit {
 p1 : String;p2 : String[];p3 : String[] ; options :String[];
 qdate : String;
 q : Number;
 dataObj : any;
 formoptions: FormGroup;

   constructor(private dataService : DataService,public dialog: MatDialog,public fb: FormBuilder) {
   
  }
  onSubmit() {
    let formData = JSON.stringify(this.formoptions.value) ;
    console.log("onSubmit:"+ formData );
    this.dataService.submitFormData(formData).then((results:any) => {
     this.openDialog(results);
    });
  }
  openDialog(resp:any) {
     this.dialog.open(ansDialog,{
      data:  resp,
    });
  }
   
  ngOnInit() { 
   this.dataService.getQbd("").then((results:any) => {
    this.dataObj = results
    console.log("inside "+ this.dataObj);
      this.p1 = this.dataObj.p1;
      this.p2 = this.dataObj.p2.split("<BR>");
      this.p3 = this.dataObj.p3.split("<BR>");
      this.options= this.dataObj.opt;
      this.q     = this.dataObj.q;
      this.qdate = this.dataObj.qdate;
      this.formoptions.patchValue({
        hiddenq: this.q,
        qdate: this.qdate,
      });
   });
    
   this.formoptions = this.fb.group({
    hiddenq : [''],
    qdate   : [''],
    ckBox: this.fb.array([
      '','','','',''
    ])
   });
   }
}
@Component({
  selector: 'ans-template',
  templateUrl: 'ans-template-dialog.html',
  styleUrls: ['./ques.component.css']
})
export class ansDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}