"use strict";
const lightSwitch = {
    bindings: {
        onFlip: "&" //the & symbol is used when binding functions
    },
    template: `
    //button is firing a click evemt "ng-click" which runs the onFlip method whenever the button is clicked
        <button ng-click="$ctrl.onFlip()">Switch</button>
    `,
}

angular.module("LightApp")
    .component("lightSwitch", lightSwitch);