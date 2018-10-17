import {Ingredients} from '../shared/ingredients.model';
export class Recipie {
public name: string;
public description: string;
public imagePath: string;
public ingredients: Ingredients[];

constructor(name: string, des: string, imagepath: string, ingredients: Ingredients[]) {
this.name = name;
this.description = des;
this.imagePath = imagepath;
this.ingredients = ingredients;
}

}
