import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewProductsComponent } from '../new-products/new-products.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( public dialog: MatDialog) { }
  addNewProduct(): void{
    const dialogRef = this.dialog.open(NewProductsComponent, {
      minWidth: "500px"
    })
  }

  ngOnInit(): void {
  }

}
