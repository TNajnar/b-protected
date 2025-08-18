import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent { }
