import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { ProductsService } from 'src/app/libs/services/products.service';
import { AngularFireStorage } from "@angular/fire/storage"
import { Observable } from 'rxjs';
import { v4 as uniqueId } from "uuid";
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {

  productsForm = this.fb.group({
    productId: [''],
    productName: [""],
    category: [""],
    imgUrl: [""],
    price: [""],
    description:[""]
  })



  id: number;
  downloadURL: Observable<string>;
  fileUrl;
  n = Date.now();
  filePath = `productImages/${this.n}`;
  fileRef = this.storage.ref(this.filePath);
  uploadProgress$: Observable<number>;
  selectedImg = "../../../assets/images/no-preview-available.png";
  checkImgUpload = false;
  product: ProductsModel;


   constructor(private fb: FormBuilder,
    private productsService: ProductsService,
    private storage: AngularFireStorage,
    public dialogRef: MatDialogRef<NewProductsComponent>,
    private toastr: ToastrService) { }

  ngOnInit(): void { }

  //CHECK IF IMAGE HAS ALREADY UPLOADED SO AS TO SAVE
  checker(): void {
    this.selectedImg == "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" ||
                                                                                   this.selectedImg == "../../../assets/images/no-preview-available.png" ?
                                                                                   this.checkImgUpload = false : this.checkImgUpload = true 
                                                                                   }

  //CREATE NEW UNIQUE ID
  getId(): void{
    this.id = uniqueId();   
  }

  onSubmit(): void {
    this.getId();
    this.productsForm.controls["productId"].setValue(this.id)
    this.product = this.productsForm.value;
    this.productsService.addNewProduct(this.product);
    this.showSuccess(this.product.productName);
    this.closeDialogue();
  }

  //UPLOAD IMAGE TO FIREBASE, RETRIEVE URL AND USE IT
  onFileSelected(event) {
    this.selectedImg = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
    this.productsService.uploadSingleFile(event, this.n).subscribe({
      complete: () => {
        this.downloadURL = this.fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if (url) {
            this.fileUrl = url;
            this.productsForm.patchValue({ imgUrl: this.fileUrl });
            this.product = this.productsForm.value;
            this.selectedImg = this.fileUrl;
            this.checker();
          }
        })
      }
    })
  }

  closeDialogue(): void {
    this.dialogRef.close();
  }

  showSuccess(product) {
    this.toastr.success(`${product} saved.`);
  }

  cancel(): void {
    this.productsForm.reset();
    this.closeDialogue();
  }


}


