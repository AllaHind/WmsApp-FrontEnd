import { Component, OnInit } from '@angular/core';
import {EmplacementService} from "../../../controller/service/emplacement.service";
import {Article} from "../../../controller/model/article";
import {Emplacement} from "../../../controller/model/emplacement";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'ngx-emplacement-create',
  templateUrl: './emplacement-create.component.html',
  styleUrls: ['./emplacement-create.component.scss']
})
export class EmplacementCreateComponent implements OnInit {

  constructor(public empService:EmplacementService,public dialogref: MatDialogRef<EmplacementCreateComponent>) { }

  ngOnInit(): void {
  }
  onClose() {

    this.dialogref.close();
  }
  get emp(): Emplacement {
    return this.empService.emp;
  }
  save() {
    this.empService.save();

  }
}
