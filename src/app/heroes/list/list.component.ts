import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroName: string[] = ["IronMan", "Spiderman", "Hulk", "Thor"];
  public heroDelete?: string = undefined;

  removeLastHero(): void {
    const deleteHero = this.heroName.pop();
    this.heroDelete = deleteHero;
  }
}
