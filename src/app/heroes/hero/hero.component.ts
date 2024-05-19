import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "IronMAn"
  public age: number = 45;
  get capitalizedName(): string {
    return this.name.toUpperCase()
  }
  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`
  }
  changeHero():void{
    this.name = "Spiderman"
  }
  changeAge():void{
    this.age = 25
  }
  resetFrom():void{
    this.name = "IronMAn"
    this.age = 45
  }
}
