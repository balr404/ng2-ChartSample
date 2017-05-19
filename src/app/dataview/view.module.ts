import { ContactComponent } from '../contact/contact.component';
import { NgModule } from "@angular/core";
import { ViewComponent} from "./view.component";
import { ContactModule} from "../contact/contact.module";
import { RWChartModule} from "../charts/rw-chart.module";

@NgModule({
    declarations: [ ViewComponent ],
    imports     : [ ContactModule, RWChartModule ]
})

export class ViewModule { }