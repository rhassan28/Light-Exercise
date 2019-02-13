"use strict";
const light = {
    template: `

    // ng-class is calling the lightOn method to be set to true in the html

        <section ng-class= "{'lightOn': $ctrl.isOn===true}">Light</section>

    // light-switch on-flip is calling the onFlip function declared on line 15. $ctrl.onFlip() is firing the flip event whevever you click the button set in the lightSwitch.component.js template
        <light-switch on-flip = "$ctrl.onFlip()"></light-switch>
    `,
    controller: [function () {
        const vm = this;
        // we are setting vm.isOn to false so when the webpage is laoded, the function onFlip won't fire
        vm.isOn = false;
        //here we declare the onFlip method
        vm.onFlip = function () {
            if (vm.isOn === true) {
                vm.isOn = false;
            }else {
                vm.isOn = true;
            }
        }
    }]
}

angular.module("LightApp")
    .component("light", light);