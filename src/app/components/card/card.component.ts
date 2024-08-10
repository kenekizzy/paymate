import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() header: string = '';
  @Input() subtext: string = '';
  @Input() displayText: string = '';
  @Input() displayHeader: string = '';
  @Input() features: string[] = [];
  @Input() imageUrl: string = '';
  @Input() reverseLayout: boolean = false;

}
