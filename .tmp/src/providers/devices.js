var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Device, categories, SecuritySystem } from '../models/device';
var Devices = (function () {
    function Devices() {
        this.securitySystem = new SecuritySystem();
        this.items = [];
        this.defaultItem = {
            "DeviceName": "outdoor_light",
            //"profilePic": "assets/img/speakers/bear.jpg", //namesto sliki mozeme ikoni za sekoja kategorija ili tip na senzor
            "about": "a light at the tree house",
            "status": "false",
            "category": categories.SecurityDevices.toString(),
        };
        var items = [
            {
                "DeviceName": "outdoor_light",
                //"profilePic": "assets/img/speakers/bear.jpg",
                "about": "a light at the tree house",
                "status": "true",
                "category": categories.OtherDevices.toString()
            },
            {
                "DeviceName": "Home Alarm",
                //"profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Alarm sensors in the house",
                "status": "true",
                "category": categories.SecurityDevices.toString()
            },
            {
                "DeviceName": "Outdoor Alarm",
                //"profilePic": "assets/img/speakers/duck.jpg",
                "about": "Alarm sensor at front door",
                "status": "true",
                "category": categories.SecurityDevices.toString()
            },
            {
                "DeviceName": "Front Door",
                //"profilePic": "assets/img/speakers/duck.jpg",
                "about": "sensor for locking/unlocking at front door",
                "status": "true",
                "category": categories.SecurityDevices.toString()
            },
            {
                "DeviceName": "Garage door",
                //"profilePic": "assets/img/speakers/duck.jpg",
                "about": "garage door sensor",
                "status": false,
                "category": categories.DoorDevices.toString()
            },
            {
                "DeviceName": "Living Room Camera",
                "about": "A camera to monitor the living room.",
                "status": "false",
                "category": categories.CamerasDevices.toString(),
                "index": "1"
            },
            {
                "DeviceName": "Hallway Camera",
                //"profilePic": "assets/img/speakers/elephant.jpg",
                "about": "A camera to monitor the hallway.",
                "status": "false",
                "category": categories.CamerasDevices.toString(),
                "index": "2"
            },
            {
                "DeviceName": "Main Air Conditioner",
                //"profilePic": "assets/img/speakers/mouse.jpg",
                "about": "The main Air Conditioner.",
                "status": "true",
                "category": categories.ThermostatsDevices.toString(),
                "index": 20,
                "index_f": (20 * 9 / 5 + 32)
            },
            {
                "DeviceName": "Garage Conditioner",
                //"profilePic": "assets/img/speakers/mouse.jpg",
                "about": "The Garage Conditioner.",
                "status": "false",
                "category": categories.ThermostatsDevices.toString(),
                "index": 25,
                "index_f": (25 * 9 / 5 + 32)
            },
            {
                "DeviceName": "Living Room Lights",
                //"profilePic": "assets/img/speakers/puppy.jpg",
                "about": "The lights in the Living Room.",
                "status": "true",
                "category": categories.OtherDevices.toString()
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new Device(item));
        }
    }
    Devices.prototype.query = function (securityStatus) {
        if (!securityStatus) {
            return this.items;
        }
        else if (securityStatus.match("disarm")) {
            this.items.forEach(function (item) {
                if (item.category.match("Security Devices")) {
                    item.status = "false";
                }
            });
            this.securitySystem.DisarmTheSecuritySystem(false); //set status to false
            return this.items;
        }
        else if (securityStatus.match("arm")) {
            this.items.forEach(function (item) {
                if (item.category.match("Security Devices")) {
                    item.status = "true";
                }
            });
            this.securitySystem.ArmTheSecuritySystem(true);
            return this.items;
        }
        else {
            //error handling
            return null;
        }
    };
    Devices.prototype.garageDoors = function (garageDoors) {
        if (!garageDoors) {
            return this.securitySystem.getGarageDoorsStatus();
        }
        else if (garageDoors.match("open")) {
            //change status for that category
            this.items.forEach(function (item) {
                if (item.category.match("Door Devices")) {
                    item.status = true;
                }
            });
            this.securitySystem.OpenCloseGarageDoors(true);
            return this.securitySystem.getGarageDoorsStatusHumanReadable();
        }
        else if (garageDoors.match("close")) {
            //change status for that category
            this.items.forEach(function (item) {
                if (item.category.match("Door Devices")) {
                    item.status = false;
                }
            });
            this.securitySystem.OpenCloseGarageDoors(false);
            return this.securitySystem.getGarageDoorsStatusHumanReadable();
        }
        else {
            //error handling
            return null;
        }
    };
    Devices.prototype.add = function (item) {
        this.items.push(item);
    };
    Devices.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Devices = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], Devices);
    return Devices;
}());
export { Devices };
//# sourceMappingURL=devices.js.map