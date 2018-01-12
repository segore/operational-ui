
          window.__NEXT_REGISTER_PAGE('/components/tabs', function() {
            var comp = module.exports=webpackJsonp([22],{1648:function(e,n,t){e.exports=t(1649)},1649:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(i),l=t(5),s=t(9),u=a(s),d=t(16),r=a(d),p=t(17),c=a(p),m={Tabs:[{name:"active",description:"Index of the active tab.",defaultValue:"0",type:"number",optional:!0},{name:"activeColor",description:"Active color. It can be a hex value or a named theme color.",defaultValue:"info",type:"string",optional:!0},{name:"onChange",description:"Function to be called once the tab index changes.",defaultValue:"() => {}",type:"func",optional:!0}],Tab:[{name:"disabled",description:"Make the tab and its content inaccessible.",defaultValue:"false",type:"boolean",optional:!0},{name:"title",description:"Title to be displayed in the tab button.",defaultValue:'""',type:"string",optional:!0}]};n.default=function(e){return o.createElement(u.default,{pathname:e.url.pathname},o.createElement(l.Card,null,o.createElement("p",null,"Component used to navigate across multiple views. It's composed of multiple ",o.createElement("a",{href:"#tab"},"Tab")," components."),o.createElement(l.Heading2Type,null,"Usage"),o.createElement(c.default,{snippet:'\n(() => {\n  class ComponentWithTab extends React.Component {\n    state = {\n      tabIndex: 0\n    }\n\n    handleChange = (tabIndex) => {\n      this.setState({\n        tabIndex\n      })\n    }\n\n    render() {\n      return (\n        <Tabs onChange={this.handleChange} active={this.state.tabIndex}>\n          <Tab title="Tab 1">\n            <div>\n              <h3>Example panel 1</h3>\n              <p>\n                Sunt do fugiat non est cupidatat ad et nisi. Adipisicing mollit veniam officia do id. Consequat\n                voluptate excepteur ex duis qui adipisicing exercitation minim nostrud non aliquip culpa enim. Aute non\n                adipisicing in officia tempor cupidatat culpa fugiat elit sunt nisi eu esse.\n              </p>\n            </div>\n          </Tab>\n          <Tab title="Tab 2">\n            <div>\n              <h3>Example panel 2</h3>\n              <p>\n                Ex occaecat est esse consectetur labore id sint id ut. Lorem commodo adipisicing ad adipisicing ea\n                consectetur esse minim anim pariatur. Excepteur est elit mollit sunt qui excepteur minim fugiat.\n              </p>\n            </div>\n          </Tab>\n          <Tab title="Tab 3" disabled>\n            <div>\n              <h3>Example panel 3</h3>\n              <p>\n                Non et esse reprehenderit elit in ad nulla mollit. Fugiat nulla consequat esse do est. Enim cupidatat\n                sit ullamco pariatur ullamco commodo ipsum deserunt deserunt dolor minim sit magna. Duis adipisicing\n                irure irure incididunt non cupidatat est ipsum deserunt ex qui adipisicing.\n              </p>\n            </div>\n          </Tab>\n        </Tabs>\n      )\n    }\n  }\n\n  return (\n    <div\n      style={{\n        padding: 15,\n        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.14)",\n        backgroundColor: "#fff",\n        minHeight: 221\n      }}\n    >\n      <ComponentWithTab />\n    </div>\n  )\n})()\n',components:{Tabs:l.Tabs,Tab:l.Tab}}),o.createElement(l.Heading2Type,null,"Props"),o.createElement("div",{style:{marginBottom:32}}),o.createElement(l.CardHeader,{id:"tab"},"Tab"),o.createElement(r.default,{props:m.Tab})))}}},[1648]);
            return { page: comp.default }
          })
        