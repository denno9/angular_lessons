import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recepies-details',
  templateUrl: './recepies-details.component.html',
  styleUrls: ['./recepies-details.component.css']
})
export class RecepiesDetailsComponent implements OnInit {
  recipe: Recipie;
  id: number;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {

        this.id = +params['id'];
        this.recipe = this.recipeService.getrecipe(this.id);

      }
    );
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
