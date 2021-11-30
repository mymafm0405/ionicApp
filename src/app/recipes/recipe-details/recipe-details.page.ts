import { Recipe } from './../recipe.model';
import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.params.subscribe((recId: Params) => {
      const id = recId.recipeId;
      this.loadedRecipe = this.recipesService.getRecipe(id);
    });
  }

  onDelete() {
    this.alertCtrl.create({
      header: 'Are you sure?', message: 'Do you really want to delete this recipe?', buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertEl => alertEl.present())
  }

  onBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
