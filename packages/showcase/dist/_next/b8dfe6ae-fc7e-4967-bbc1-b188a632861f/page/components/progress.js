
          window.__NEXT_REGISTER_PAGE('/components/progress', function() {
            var comp = module.exports=webpackJsonp([26],{1640:function(e,t,a){e.exports=a(1641)},1641:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(r),i=a(5),l=a(9),s=n(l),p=a(16),d=n(p),u=a(17),c=n(u),m=[{name:"paused",description:"By setting this prop, the animation can be stopped and started again from the same position.",defaultValue:"false",type:"boolean",optional:!0},{name:"complete",description:"If the animation is not marked as complete, the progress bar starts at 80%. Otherwise, it is set to go all the way to the right.",defaultValue:"false",type:"boolean",optional:!0}];t.default=function(e){return o.createElement(s.default,{pathname:e.url.pathname},o.createElement(i.Card,null,o.createElement("p",null,"Animating progress bar, covering an entire area. Add as a child to any non-statically positioned element."),o.createElement(i.Heading2Type,null,"Usage"),o.createElement(c.default,{snippet:'\n<div style={{ width: 300, height: 240, border: "1px solid #adadad", padding: 20, position: "relative" }}>\n  While I patiently wait for my data, this progress bar assures me that things will be ok.\n  <Progress />\n</div>\n',components:{Progress:i.Progress}}),o.createElement(i.Heading2Type,null,"Props"),o.createElement(d.default,{props:m})))}}},[1640]);
            return { page: comp.default }
          })
        