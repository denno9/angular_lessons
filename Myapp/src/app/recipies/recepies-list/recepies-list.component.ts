import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {
  subscription: Subscription;
  recipes: Recipie[];
  constructor(private recipeService: RecipeService, private route: Router, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipe: Recipie[]) => {
        this.recipes = recipe;
      }
    );

  }
  onAddRecipe() {
    this.route.navigate(['new'], { relativeTo: this.acRoute });
  }

}
