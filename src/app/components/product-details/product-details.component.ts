import { Component, OnInit } from '@angular/core';
import { ProductsService } from './serivce/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any;
 
 

  constructor(private router: Router, private route: ActivatedRoute,private productsService: ProductsService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //this.productId = this.productsService.getProductById(this.route.snapshot.paramMap.get('id'));
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productsService.getAllproduct().find(x => x.p_id == 13)
    console.log(this.product);
  }
  getAllProducts(){
    return this.productsService.getAllproduct();
  }
 
}
