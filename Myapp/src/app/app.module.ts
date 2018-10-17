import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecepiesListComponent } from './recipies/recepies-list/recepies-list.component';
import { RecepiesDetailsComponent } from './recipies/recepies-details/recepies-details.component';
import { ReceipiesItemComponent } from './recipies/recepies-list/receipies-item/receipies-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list/shopinglist.service';
import { NoticeComponent } from './recipies/notice/notice.component';
import { EditComponent } from './recipies/edit/edit.component';
import { SinupComponent } from './auth/sinup/sinup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/Recipe', pathMatch: 'full' },
  {
    path: 'Recipe', component: RecipiesComponent, children: [
      { path: '', component: NoticeComponent },
      { path: 'new', component: EditComponent },
      { path: ':id', component: RecepiesDetailsComponent },
      { path: ':id/edit', component: EditComponent }
    ]
  },
  { path: 'ShoppingList', component: ShoppingListComponent },
  { path: 'signup', component: SinupComponent },
  { path: 'signin', component: SigninComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecepiesListComponent,
    RecepiesDetailsComponent,
    ReceipiesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    NoticeComponent,
    EditComponent,
    SinupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
