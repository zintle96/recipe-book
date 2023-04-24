import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipes[] = [
  new Recipes('A Test recipe', 'This is simply a test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.simplyrecipes.com%2Frecipes%2Flasagna%2F&psig=AOvVaw3iNcny8enFJxajN0bEsIt4&ust=1682402811018000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICy24Ltwf4CFQAAAAAdAAAAABAJ')
];

  constructor() { }

  ngOnInit(): void {
  }

}
