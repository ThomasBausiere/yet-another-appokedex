import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [ReactiveFormsModule],
  templateUrl: './searchbar.html',
  styleUrls: ['./searchbar.css'],
  standalone: true,
})
export class Searchbar {
  search_control = new FormControl(0, [Validators.required]);

  @Output() search = new EventEmitter<number>();

  searchMons(event?: Event): void {
  event?.preventDefault(); 
  this.search.emit(Number(this.search_control.value));
}
}
