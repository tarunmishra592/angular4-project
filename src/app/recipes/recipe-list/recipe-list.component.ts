import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe( 'A Test Recipe', 'This is simply text', 'assets/images/1.jpg' ),
    new Recipe( 'B Test Recipe', 'This is simply text', 'assets/images/2.jpg' ),
    new Recipe( 'C Test Recipe', 'This is simply text', 'assets/images/3.jpg' ),
    new Recipe( 'D Test Recipe', 'This is simply text', 'assets/images/4.jpg' ),
    new Recipe( 'E Test Recipe', 'This is simply text', 'assets/images/5.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit( recipe );
  }

}
