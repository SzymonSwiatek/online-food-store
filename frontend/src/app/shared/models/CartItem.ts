import { Food } from './Food';

export class CartItem {
  // constructor(food: Food) {
  //   this.food = food;
  // }
  // food!: Food;

  //better way below, same result

  constructor(public food: Food) {}

  quantity: number = 1;
  price: number = this.food.price;
}
