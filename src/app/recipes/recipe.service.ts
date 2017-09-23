import { Recipe } from './recipe.model';


export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe( 'A Test Recipe', 'This is simply text', 'assets/images/1.jpg' ),
        new Recipe( 'B Test Recipe', 'This is simply text', 'assets/images/2.jpg' ),
        new Recipe( 'C Test Recipe', 'This is simply text', 'assets/images/3.jpg' ),
        new Recipe( 'D Test Recipe', 'This is simply text', 'assets/images/4.jpg' ),
        new Recipe( 'E Test Recipe', 'This is simply text', 'assets/images/5.jpg' )
    ];

    getRecipe(){
        return this.recipes.slice();
    }

}