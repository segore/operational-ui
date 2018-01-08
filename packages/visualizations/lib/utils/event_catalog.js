"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Events = {
    CHART: {
        CLICK: "chart:click",
        HOVER: "chart:hover",
        MOVE: "chart:mousemove",
        OUT: "chart:out"
    },
    FOCUS: {
        CLEAR: "focus:clear",
        COMPONENT: {
            CLICK: "focus:component:click",
            HOVER: "focus:component:hover",
            OUT: "focus:component:out",
            LABEL: {
                OUT: "focus:component:label:out"
            }
        },
        ELEMENT: {
            HIGHLIGHT: "focus:element:highlight",
            CLICK: "focus:element:click",
            HOVER: "focus:element:hover",
            OUT: "focus:element:out"
        }
    }
};
exports.default = Events;
//# sourceMappingURL=event_catalog.js.map