var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { categories } from '../../models/device';
import { Devices } from '../../providers/devices';
import { ItemCreatePage } from '../../pages/item-create/item-create';
var ListMasterPage = (function () {
    function ListMasterPage(navCtrl, items, modalCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.Categories = [];
        this.currentItems = this.items.query();
        var CategoryList = [
            { "category": categories.SecurityDevices.toString() },
            { "category": categories.DoorDevices.toString() },
            { "category": categories.ThermostatsDevices.toString() },
            { "category": categories.CamerasDevices.toString() },
            { "category": categories.OtherDevices.toString() }
        ];
        for (var _i = 0, CategoryList_1 = CategoryList; _i < CategoryList_1.length; _i++) {
            var category = CategoryList_1[_i];
            this.Categories.push(category.category);
        }
        // this.createLists("Other Devices");
        // console.log(this.currentItems);
        // console.log(this.Categories);
    }
    ListMasterPage.prototype.createLists = function (category) {
        var categoryArray = [];
        for (var _i = 0, _a = this.currentItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.category == category) {
                categoryArray.push(item);
            }
        }
        // console.log(categoryArray);
        return categoryArray;
    };
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(ItemCreatePage);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    ListMasterPage = __decorate([
        Component({
            selector: 'page-list-master',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/list-master/list-master.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'All Devices\' }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let items of Categories">\n    <ion-item-divider color="light"> {{items}}</ion-item-divider>\n    <ion-list *ngFor="let item of createLists(items)">\n      <ion-item-sliding>\n        <ion-item>\n          <!-- <ion-avatar item-start>\n            <img [src]="item.profilePic" />\n          </ion-avatar> -->\n          <ion-label>\n            <h2>{{item.DeviceName}}</h2>\n            <p>{{item.about}}</p>\n          </ion-label>\n           <ion-toggle [(ngModel)]= "item.status"></ion-toggle>\n          <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n        </ion-item>\n\n        <ion-item-options>\n          <button ion-button color="danger" (click)="deleteItem(item)">\n            {{ \'DELETE_BUTTON\' }}\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n</ion-content>\n<!-- <ion-list >\n  <div>\n    <div>There are {{currentItems.length}} items in total.</div>\n  </div>\n  <ion-item-divider color="light"> {{item.category}}</ion-item-divider>\n  <ion-item-sliding>\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="item.profilePic" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.DeviceName}}</h2>\n        <p>{{item.about}}</p>\n        <p> {{item.category}} </p>\n      </ion-label>\n       <ion-toggle checked={{item.status}}></ion-toggle>\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n    </ion-item>\n\n    <ion-item-options>\n      <button ion-button color="danger" (click)="deleteItem(item)">\n        {{ \'DELETE_BUTTON\' }}\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list> -->\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/list-master/list-master.html"*/
        }),
        __metadata("design:paramtypes", [NavController, Devices, ModalController])
    ], ListMasterPage);
    return ListMasterPage;
}());
export { ListMasterPage };
//# sourceMappingURL=list-master.js.map