import { RecipesService } from './recipes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  recSub: Subscription;

  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.recSub = this.recipesService.recChanged.subscribe(
      (recs: Recipe[]) => {
        this.recipes = recs;
      }
    )
  }

  onItemClick(id: string) {
    this.router.navigate([id], {relativeTo: this.route})
  }

  ngOnDestroy() {
    this.recSub.unsubscribe();
  }
}
