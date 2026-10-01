import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal } from './animal/animal';
import { Recipe } from './recipe/recipe';

@Component({
  imports: [RouterOutlet, Animal, Recipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hw1');
}
