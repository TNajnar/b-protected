import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SectionId } from '@common/enums';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  protected readonly SectionId = SectionId;
}
