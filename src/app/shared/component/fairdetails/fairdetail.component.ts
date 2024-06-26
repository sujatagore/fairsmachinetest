import { Component, Input } from "@angular/core";
import { IFair } from "../../module/data.interface";


@Component({
    selector : 'app-fairDetail',
    templateUrl : './fairdetail.component.html',
    styleUrls : ['./fairdetail.component.scss']
})

export class FairDetails{
    @Input() getSelectedFair !: IFair
}
