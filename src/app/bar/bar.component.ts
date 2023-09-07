import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from '../foo/foo.component';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule, FooComponent],
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {}
