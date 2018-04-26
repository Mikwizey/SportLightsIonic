import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FieldService} from "../../providers/field-service";
import { FieldPage } from '../field/field';

@IonicPage()
@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {
    selectedItem: any;
    //icons: string[];
    items: Array<{title: string, note: string /*, icon: string*/}>;
    protected fields: Array<any>;
    

    constructor(public navCtrl: NavController, public navParams: NavParams, public fieldService: FieldService) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        // Let's populate this page with some filler content for funzies
        // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        //  'american-football', 'boat', 'bluetooth', 'build'];


        // for (var field in fields) {
        //  this.fields.push({
        //      field.getName();
        // });
        //}


        this.items = [];
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }

    ionViewDidLoad() {
        
        this.fieldService.getGoodFields().subscribe(fields => {
            this.fields = fields;
        })
    }

    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage, {
            item: item
        });
    }

    showField(){

        this.navCtrl.push(FieldPage);

    }
}


