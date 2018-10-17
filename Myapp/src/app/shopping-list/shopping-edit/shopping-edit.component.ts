import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  @ViewChild('f') form: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingService.getIng(index);
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        }
        );
      }
    );
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);

    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);

    } else {
      this.shoppingService.addIngredients(newIngredient);
    }
    this.form.reset();
    this.editMode = false;
  }

  onDeleteItem() {
    this.shoppingService.deleteItem(this.editedItemIndex);
    this.onClear();
  }
  onClear() {
    this.form.reset();
    this.editMode = false;
  }
  ngOnDestroy() {

    this.subscription.unsubscribe();
  }
}
