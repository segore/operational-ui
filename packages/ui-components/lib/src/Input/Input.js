"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var glamorous_1 = require("glamorous");
var StyledInput = glamorous_1.default.input(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.spacing / 2,
        border: "1px solid",
        borderColor: theme.colors.grey30,
        font: "inherit",
        WebkitAppearance: "none"
    });
});
var Input = function (_a) {
    var className = _a.className, name = _a.name, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange;
    return (React.createElement(StyledInput, { className: className, name: name, placeholder: placeholder, value: value, onChange: function (e) {
            onChange(e.target.value);
        } }));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map