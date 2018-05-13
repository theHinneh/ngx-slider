import { Component } from '@angular/core';
import { Options } from '@local/ng5-slider';

@Component({
  selector: 'app-dynamic-pointer-color-slider',
  templateUrl: './dynamic-pointer-color-slider.component.html'
})
export class DynamicPointerColorSliderComponent {
  value: number = 12;
  options: Options = {
    showSelectionBar: true,
    getPointerColor: (value: number): string => {
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
