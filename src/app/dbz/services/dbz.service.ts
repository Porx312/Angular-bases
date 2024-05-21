import { Injectable } from '@angular/core';
import { Chararter } from '../interface/chararter.interface';

import { v4 as uuidv4 } from 'uuid';






@Injectable({
  providedIn: 'root'
})
export class DbzService {
  // Corrected spelling and consistent naming
  public characters: Chararter[] = [
    { name: 'Krilin', power: 300, id: uuidv4() },
    { name: 'Goku', power: 10000, id: uuidv4() },
    { name: 'Vegeta', power: 100000, id:uuidv4()}
  ];

  // Method to add a new character
  onNewCharacter(character: Chararter): void {
    const newChararter: Chararter = {  ...character, id: uuidv4() }
    this.characters.unshift(newChararter);
    console.log(this.characters);
  }

  // Method to delete a character by index
  deleteChararterbyID(index: string): void {
    this.characters = this.characters.filter((chararter) => chararter.id !== index);
  }
}
