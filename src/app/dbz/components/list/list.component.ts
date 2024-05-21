import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chararter } from '../../interface/chararter.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponentDbz {

  @Input()
  public ChararterList: Chararter[] = [{
    name: "Tron",
    power: 2000,
    id: uuidv4()
  }];

  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter();

  onDeleteChararter(id: string): void {
    if(!id) return
    this.onDeleteID.emit(id);
  }
}
