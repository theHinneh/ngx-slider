import { Component } from '@angular/core';
import { Options } from '@local/ng5-slider';

@Component({
  selector: 'app-dynamic-color-selection-bar-slider',
  templateUrl: './dynamic-color-selection-bar-slider.component.html'
})
export class DynamicColorSelectionBarSliderComponent {
  value: number = 12;
  options: Options = {
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 3) {
          return 'red';
      }
      if (value <= 6) {
          return 'orange';
      }
      if (value <= 9) {
          return 'yellow';
      }
      return '#2AE02A';
    }
  };
}
