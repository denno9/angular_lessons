import { Recipie } from './recipie.model';
import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopinglist.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipie>();
    recipeChanged = new Subject<Recipie[]>();

    recipes: Recipie[] = [
        new Recipie('This is a test', 'tomato', 'assets/gradu.jpg',
            [new Ingredients('meat', 2), new Ingredients('curry Pouwder', 5)],
        ),
        new Recipie('This is a test', 'this is me', 'heheheh',
            [new Ingredients('onions', 2), new Ingredients('Cheese', 5)]),
        new Recipie('This is a test', 'wooooow wait', 'heheheh',
            [new Ingredients('Carrots', 2), new Ingredients('sweet potatoes', 5)]),
    ];
    constructor(private shoppingService: ShoppingListService) { }

    getRecipe() {
        return this.recipes.slice();
    }

    getrecipe(id: number) {
        return this.recipes[id];
    }
    addShopingL(ingredients: Ingredients[]) {
        this.shoppingService.addToList(ingredients);
    }
    updateRecipe(index: number, recipe: Recipie) {
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    newRecipe(recipe: Recipie) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
