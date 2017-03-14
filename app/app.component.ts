import { Component } from '@angular/core';
import { HttpService} from './_services/http.service';

@Component({
    selector: 'my-app',
    template: `<h1>Welcome!</h1>
    <router-outlet></router-outlet>
    `,
    providers: [HttpService]
})
export class AppComponent {

}


/**
 * Created by Nadine on 13.03.2017.
 */
