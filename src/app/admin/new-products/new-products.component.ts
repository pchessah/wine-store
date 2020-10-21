import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsModel } from 'src/app/libs/models/products-model';
import { ProductsService } from 'src/app/libs/services/products.service';
import { AngularFireStorage } from "@angular/fire/storage"
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
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
  })



  downloadURL: Observable<string>;
  fileUrl;
  n = Date.now();
  filePath = `productImages/${this.n}`;
  fileRef = this.storage.ref(this.filePath);
  uploadProgress$: Observable<number>;
  selectedImg = "../../../assets/images/no-preview-available.png";
  checkImgUpload = false;
  product: ProductsModel;


  checker(): void {
    this.selectedImg == "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" ||
                                                                                   this.selectedImg == "../../../assets/images/no-preview-available.png" 
                                                                                   ? this.checkImgUpload = false : this.checkImgUpload = true 
                                                                                   }

  constructor(private fb: FormBuilder,
    private productsService: ProductsService,
    private storage: AngularFireStorage,
    public dialogRef: MatDialogRef<NewProductsComponent>,
    private toastr: ToastrService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.product = this.productsForm.value;
    this.productsService.addNewProduct(this.product);
    this.showSuccess(this.product.productName);
    this.closeDialogue();
  }

  onFileSelected(event) {
    this.selectedImg = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
    this.productsService.uploadSingleFile(event, this.n).subscribe({
      complete: () => {
        this.downloadURL = this.fileRef.getDownloadURL();

        this.downloadURL.subscribe(url => {
          if (url) {
            this.fileUrl = url;
            this.productsForm.patchValue({ imgUrl: this.fileUrl })
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


