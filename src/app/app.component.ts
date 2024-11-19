 import { Component } from '@angular/core';
 import { RouterOutlet } from '@angular/router';

 @Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
 })
 export class AppComponent {
   title = 'proyectoAPI';
 }

//import { Component } from '@angular/core';
//import { CatSearchComponent } from './components/cat-search/cat-search.component';

//@Component({
//  selector: 'app-root',
//  standalone: true,
//  template: `
//    <h1>Busqueda de Razas de Gato con Cat API</h1>
//    <app-cat-search></app-cat-search>`,
//  imports: [CatSearchComponent]
//})
//export class AppComponent {}