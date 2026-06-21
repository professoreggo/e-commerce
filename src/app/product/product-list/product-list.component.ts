import { Component , OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService:ProductService,
              private cartService:CartService,
              private snackBar:MatSnackBar){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;  //it should have all products before applying filters
    })
  }

  addToCart(product:Product):void{
    this.cartService.addToCart(product).subscribe({
      next: () =>{      // on success 
        this.snackBar.open("Product added to cart!","",{
          duration:2000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    });
  }

  applyFilter(event: Event): void{   // searching functionality
    let searchTerm = (event.target as HTMLInputElement).value
    searchTerm = searchTerm.toLowerCase();

    this.filteredProducts = this.products.filter(product=>product.name.toLocaleLowerCase().includes(searchTerm));
  }

}
