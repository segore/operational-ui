"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Card_1 = require("../Card/Card");
var Icon_1 = require("../Icon/Icon");
var DatePicker_styles_1 = require("./DatePicker.styles");
var DatePicker_utils_1 = require("./DatePicker.utils");
var DatePicker_Month_1 = require("./DatePicker.Month");
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isExpanded: false,
            year: 2017,
            month: 9
        };
        return _this;
    }
    DatePicker.prototype.changeMonth = function (diff) {
        this.setState(function (prevState) { return ({
            month: prevState.month + diff < 0 ? prevState.month + diff + 12 : (prevState.month + diff) % 12,
            year: prevState.month + diff < 0
                ? prevState.year - 1
                : prevState.month + diff > 11 ? prevState.year + 1 : prevState.year
        }); });
    };
    DatePicker.prototype.componentDidMount = function () {
        var _this = this;
        this.keypressHandler = function (ev) {
            if (ev.keyCode !== 27) {
                return;
            }
            _this.setState(function (prevState) { return (__assign({}, prevState, { isExpanded: !prevState.isExpanded })); });
            if (_this.inputNode) {
                _this.inputNode.blur();
            }
        };
        this.outsideClickHandler = function (ev) {
            _this.setState(function (prevState) { return (__assign({}, prevState, { isExpanded: false })); });
        };
        window.addEventListener("click", this.outsideClickHandler);
        window.addEventListener("keydown", this.keypressHandler);
    };
    DatePicker.prototype.componentWillUnmount = function () {
        window.removeEventListener("click", this.outsideClickHandler);
        window.removeEventListener("keydown", this.keypressHandler);
    };
    DatePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, start = _a.start, end = _a.end;
        var placeholderDays = DatePicker_utils_1.monthStartDay(this.state.year, this.state.month);
        var daysInCurrentMonth = DatePicker_utils_1.daysInMonth(this.state.month, this.state.year);
        return (React.createElement(DatePicker_styles_1.Container, { css: this.props.css, isExpanded: this.state.isExpanded, onClick: function (ev) {
                ev.stopPropagation();
            } },
            React.createElement(DatePicker_styles_1.Toggle, { onClick: function () {
                    _this.setState(function (prevState) { return ({
                        isExpanded: !prevState.isExpanded
                    }); });
                } },
                React.createElement(Icon_1.default, { name: this.state.isExpanded ? "ChevronUp" : "ChevronDown", size: 12 })),
            React.createElement(DatePicker_styles_1.Input, { innerRef: function (node) {
                    _this.inputNode = node;
                }, value: [start, end].filter(function (s) { return !!s; }).join(" - "), placeholder: this.props.placeholder, onFocus: function () {
                    _this.setState(function (prevState) { return ({
                        isExpanded: !prevState.isExpanded
                    }); });
                    _this.inputNode && _this.inputNode.blur();
                } }),
            React.createElement(Card_1.default, { className: "co_card" },
                React.createElement(DatePicker_styles_1.Nav, null,
                    React.createElement(DatePicker_styles_1.IconContainer, { onClick: function () {
                            _this.changeMonth(-1);
                        } },
                        React.createElement(Icon_1.default, { name: "ChevronLeft", size: 12 })),
                    React.createElement("span", null, DatePicker_utils_1.months[this.state.month] + ", " + this.state.year),
                    React.createElement(DatePicker_styles_1.IconContainer, { onClick: function () {
                            _this.changeMonth(+1);
                        } },
                        React.createElement(Icon_1.default, { name: "ChevronRight", size: 12 }))),
                React.createElement(DatePicker_Month_1.default, { start: this.props.start, end: this.props.end, year: this.state.year, month: this.state.month, onChange: this.props.onChange }))));
    };
    return DatePicker;
}(React.Component));
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map