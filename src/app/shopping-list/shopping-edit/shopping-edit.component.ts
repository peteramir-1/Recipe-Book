import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// *------- Services -------*/
import { ShoppingListService } from './../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  shoppingListForm: FormGroup;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListForm = new FormGroup({
      ingName: new FormControl(null, Validators.required),
      ingNum: new FormControl(null, [Validators.min(1), Validators.required]),
    });
  }

  addIng(): void {
    if (this.shoppingListForm.valid) {
      this.shoppingListService.addIng(
        this.shoppingListForm.get('ingName').value,
        this.shoppingListForm.get('ingNum').value
      );
      this.shoppingListForm.reset();
    } else {
      this.shoppingListForm.markAllAsTouched();
    }
  }

  clear(): void {
    this.shoppingListService.clear();
  }
}
