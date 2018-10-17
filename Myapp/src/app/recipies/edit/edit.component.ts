import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  recipeForm: FormGroup;
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute,
    private rute: Router,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );

  }
  onSubmit() {
    // const recipe = new Recipie(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['ingredients']
    // );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);

    } else {
      this.recipeService.newRecipe(this.recipeForm.value);
    }
    console.log(this.recipeForm.value);
    this.Clear();
    this.rute.navigate(['../'], { relativeTo: this.route });
  }
  Clear() {
    this.recipeForm.reset();
  }
  onCancel() {
    this.rute.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup(
        {
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[0-9]+[1-9]*$/)
          ])
        }
      )
    );
  }

  private initForm() {

    let recipeName = '';
    let recipePath = '';
    let recipeDesc = '';
    const ingredientArray = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getrecipe(this.id);
      recipeName = recipe.name;
      recipePath = recipe.imagePath;
      recipeDesc = recipe.description;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          ingredientArray.push(new FormGroup(
            {
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[0-9]+[1-9]*$/)
              ])
            }
          ));
        }
      }
    }
    this.recipeForm = new FormGroup(
      {
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipePath, Validators.required),
        'description': new FormControl(recipeDesc, Validators.required),
        'ingredients': ingredientArray
      }
    );

  }
}
