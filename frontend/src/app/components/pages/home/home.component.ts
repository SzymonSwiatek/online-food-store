import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

    let foodsObservable: Observable<Food[]>; //change this.foods to foodsObservable below

    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        //index signature could be change in the tsconfig.json
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(
          params['searchTerm']
        );
      } else if (params['tag']) {
        foodsObservable = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        foodsObservable = foodService.getAll();
        // console.log(params['searchTerm']);
      }

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }

  ngOnInit(): void {}
}
