import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DishService } from '../dish.service';
import { Dish } from '../dish.model';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.page.html',
  styleUrls: ['./dishdetail.page.scss'],
})
export class DishdetailPage implements OnInit {
  item: Dish;
  id: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dishService: DishService) { }
    dish: { id: string; title: string; description: string; image: string; price: number; };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('dishId');
    this.item = this.dishService.getDish(this.id);
  }
  onBookDish() {
    this.router.navigateByUrl('/tabs/tab1');
  }
}
