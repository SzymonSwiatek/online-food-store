import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute //listen to the route
  ) {
    // this.foods = foodService.getAll();

    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        //index signature could be change in the tsconfig.json
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params['searchTerm']
        );
      } else {
        this.foods = foodService.getAll();
        // console.log(params['searchTerm']);
      }
    });
  }

  ngOnInit(): void {}
}
