import { Component, OnInit,Inject  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SosComponent {

  message: string;
  contact: string;
  onSend:boolean=false;

  constructor(public dialog: MatDialog) {}

  openDialog(value): void {
    if(value==1){
      this.message="Sending SOS to Infosys emergency team with details below.";
      this.contact="For further details / help reach out to Infosys Emergency Contact: +91 9009594561"
    }
    if(value==2){
      this.message="Sending SOS to personal emergency contact with details below.";
      this.contact="Employee's Personal Emergency Contact: +91 9009594564"
      
    }
    if(value==3){
      this.message="Sending SOS to Infosys emergency team & Personal emergency contact with details below.";
      this.contact="Employee's Personal Emergency Contact: +91 9009594564 Infosys Emergency Contact: +91 9009594561"
    } 
    console.log(this.message);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '530px',
      height:'70vh',
      data:{msg:this.message,contact:this.contact,send:false}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onSend=result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'sos-dialog.html',
  styleUrls: ['./sos.component.css']
})
export class DialogOverviewExampleDialog {
  cautionMsg="Send message";
  send=true;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.send=false;
    this.dialogRef.close();
  }

}
