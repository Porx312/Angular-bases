import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Chararter } from '../../interface/chararter.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-chararter-dbz',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponentDbz {
  @Output()
  onNewCharacter: EventEmitter<Chararter> = new EventEmitter();

  public chararter: Chararter = {
    name: '',
    power: 0,
    id: uuidv4()
  };

  emitChararter() {
    console.log(this.chararter);
    if (this.chararter.name.length === 0) return;
    this.onNewCharacter.emit(this.chararter);
    this.chararter.name = ""
    this.chararter.power = 0
  }
}
