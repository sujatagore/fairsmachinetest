import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IFair } from "../../module/data.interface";





@Component({
    selector : 'app-fairCards',
    templateUrl : './faircard.component.html',
    styleUrls : ['./faircard.component.scss']
})

export class FairCards{
    @Input () getFair !: IFair

    @Output() emitFair : EventEmitter<IFair> = new EventEmitter<IFair>()

    onFairCard(){
        this.emitFair.emit(this.getFair)
    }
}