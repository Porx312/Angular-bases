import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Chararter } from '../interface/chararter.interface';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainComponentDbz {
  constructor(private dbzService: DbzService) {

  }
  get characters(): Chararter[] {
    return [...this.dbzService.characters]
  }
  deleteChararterbyID(id: string): void {
    this.dbzService.deleteChararterbyID(id);
  }
  onAddCharacter(character: Chararter): void {
    this.dbzService.onNewCharacter(character);
  }
}
