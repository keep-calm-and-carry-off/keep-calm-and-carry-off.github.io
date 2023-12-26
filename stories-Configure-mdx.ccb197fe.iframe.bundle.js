(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[769],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Configure.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RightArrow:()=>RightArrow,default:()=>Configure});var _path,discord_path,_g,_defs,youtube_path,_path2,tutorials_g,tutorials_defs,react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let github=function(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none"},props),_path||(_path=react.createElement("path",{fill:"#161614",d:"M16 0C7.165 0 0 7.175 0 16.026c0 7.08 4.585 13.087 10.942 15.206.8.149 1.093-.348 1.093-.77 0-.383-.015-1.645-.022-2.984-4.45.969-5.39-1.891-5.39-1.891-.728-1.852-1.777-2.345-1.777-2.345-1.451-.995.11-.974.11-.974 1.606.113 2.452 1.651 2.452 1.651 1.427 2.45 3.743 1.742 4.657 1.332.143-1.035.558-1.742 1.015-2.143-3.554-.405-7.29-1.779-7.29-7.92 0-1.75.626-3.179 1.65-4.3-.167-.405-.715-2.035.154-4.242 0 0 1.344-.43 4.401 1.643A15.314 15.314 0 0 1 16 7.749c1.36.007 2.73.185 4.008.54 3.054-2.074 4.396-1.643 4.396-1.643.87 2.207.323 3.837.157 4.241 1.026 1.122 1.646 2.552 1.646 4.302 0 6.155-3.742 7.51-7.305 7.907.574.497 1.085 1.472 1.085 2.967 0 2.145-.019 3.87-.019 4.398 0 .427.288.926 1.1.77C27.42 29.108 32 23.103 32 16.025 32 7.175 24.836 0 16 0M5.993 22.829c-.036.08-.16.103-.275.049-.116-.053-.18-.161-.143-.241.034-.082.16-.105.275-.05.117.052.183.162.143.242m.787.703c-.077.071-.226.038-.327-.074-.105-.112-.124-.261-.047-.333.079-.07.223-.038.328.074.105.113.125.261.046.333m.54.9c-.099.068-.259.004-.358-.138-.098-.143-.098-.314.002-.382.1-.069.257-.007.358.135.098.144.098.315-.002.385m.913 1.042c-.088.097-.275.071-.412-.061-.14-.13-.178-.313-.09-.41.088-.097.276-.07.414.062.139.129.181.313.088.41m1.18.352c-.039.126-.219.183-.4.13-.181-.055-.3-.203-.263-.33.038-.126.218-.185.401-.128.18.055.3.2.262.328m1.343.15c.004.132-.15.241-.34.244-.19.004-.346-.103-.348-.233 0-.134.15-.242.342-.245.19-.004.346.102.346.233m1.32-.051c.022.129-.11.261-.3.296-.185.034-.357-.045-.38-.173-.023-.132.111-.265.297-.299.189-.033.358.045.382.176"})))};function discord_extends(){return(discord_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let discord=function(props){return react.createElement("svg",discord_extends({xmlns:"http://www.w3.org/2000/svg",width:33,height:32,fill:"none"},props),react.createElement("g",{clipPath:"url(#discord_svg__a)"},react.createElement("mask",{id:"discord_svg__b",width:33,height:25,x:0,y:4,maskUnits:"userSpaceOnUse",style:{maskType:"luminance"}},discord_path||(discord_path=react.createElement("path",{fill:"#fff",d:"M32.503 4.002h-32v24.774h32z"}))),_g||(_g=react.createElement("g",{mask:"url(#discord_svg__b)"},react.createElement("path",{fill:"#5865F2",d:"M27.593 6.208a26.398 26.398 0 0 0-6.514-2.019.099.099 0 0 0-.104.05c-.282.5-.593 1.152-.811 1.665a24.376 24.376 0 0 0-7.316 0 16.85 16.85 0 0 0-.824-1.665.103.103 0 0 0-.104-.05 26.325 26.325 0 0 0-6.514 2.02.093.093 0 0 0-.042.036C1.215 12.439.079 18.481.636 24.448a.11.11 0 0 0 .042.075 26.541 26.541 0 0 0 7.99 4.036.103.103 0 0 0 .112-.036 18.954 18.954 0 0 0 1.635-2.658.101.101 0 0 0-.055-.14c-.87-.33-1.7-.733-2.497-1.19a.103.103 0 0 1-.01-.17c.168-.125.336-.256.496-.388a.1.1 0 0 1 .103-.014c5.237 2.39 10.907 2.39 16.082 0a.099.099 0 0 1 .105.013c.16.132.328.264.497.39a.103.103 0 0 1-.009.17 16.41 16.41 0 0 1-2.497 1.187.102.102 0 0 0-.055.142c.48.93 1.03 1.816 1.634 2.656.025.036.07.051.112.038a26.454 26.454 0 0 0 8.003-4.036.102.102 0 0 0 .042-.074c.667-6.898-1.118-12.89-4.732-18.203a.081.081 0 0 0-.041-.038M11.197 20.815c-1.577 0-2.876-1.447-2.876-3.224 0-1.776 1.274-3.223 2.876-3.223 1.615 0 2.901 1.46 2.876 3.223 0 1.777-1.274 3.224-2.876 3.224m10.633 0c-1.577 0-2.876-1.447-2.876-3.224 0-1.776 1.274-3.223 2.876-3.223 1.614 0 2.9 1.46 2.876 3.223 0 1.777-1.262 3.224-2.876 3.224"})))),_defs||(_defs=react.createElement("defs",null,react.createElement("clipPath",{id:"discord_svg__a"},react.createElement("path",{fill:"#fff",d:"M.5 0h32v32H.5z"})))))};function youtube_extends(){return(youtube_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let youtube=function(props){return react.createElement("svg",youtube_extends({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none"},props),youtube_path||(youtube_path=react.createElement("path",{fill:"#ED1D24",d:"M31.331 8.447a3.978 3.978 0 0 0-2.829-2.788C26.007 5 16 5 16 5S5.993 5 3.498 5.66a3.978 3.978 0 0 0-2.83 2.787C0 10.905 0 16.035 0 16.035s0 5.13.669 7.59a3.979 3.979 0 0 0 2.829 2.787C5.993 27.07 16 27.07 16 27.07s10.007 0 12.502-.658a3.979 3.979 0 0 0 2.83-2.788C32 21.165 32 16.035 32 16.035s0-5.13-.669-7.588"})),_path2||(_path2=react.createElement("path",{fill:"#fff",d:"m12.727 20.693 8.363-4.657-8.363-4.658z"})))};function tutorials_extends(){return(tutorials_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}let tutorials=function(props){return react.createElement("svg",tutorials_extends({xmlns:"http://www.w3.org/2000/svg",width:33,height:32,fill:"none"},props),tutorials_g||(tutorials_g=react.createElement("g",{fillRule:"evenodd",clipPath:"url(#tutorials_svg__a)",clipRule:"evenodd"},react.createElement("path",{fill:"#B7F0EF",d:"M17 7.87a2.91 2.91 0 0 1 2.343-2.853l10.182-2.02A2.91 2.91 0 0 1 33 5.852v16.283a2.909 2.909 0 0 1-2.343 2.854l-10.182 2.02A2.91 2.91 0 0 1 17 24.153z",opacity:.7}),react.createElement("path",{fill:"#87E6E5",d:"M1 5.852A2.91 2.91 0 0 1 4.475 3l10.182 2.02A2.91 2.91 0 0 1 17 7.871v16.283a2.91 2.91 0 0 1-3.475 2.854l-10.182-2.02A2.91 2.91 0 0 1 1 22.136z"}),react.createElement("path",{fill:"#61C1FD",d:"M15.543 5.713s1.273.25 1.857.864c.585.613 1.052 2.454 1.052 2.454v17.932c0 1.852.925 4.454.925 4.454L17.4 28.895l-1.142 2.522s-.715-2.34-.715-4.295z"}))),tutorials_defs||(tutorials_defs=react.createElement("defs",null,react.createElement("clipPath",{id:"tutorials_svg__a"},react.createElement("path",{fill:"#fff",d:"M.5 0h32v32H.5z"})))))},styling_namespaceObject=__webpack_require__.p+"static/media/styling.38cab73b.png",context_namespaceObject=__webpack_require__.p+"static/media/context.645728c6.png",assets_namespaceObject=__webpack_require__.p+"static/media/assets.e6440a95.png",docs_namespaceObject=__webpack_require__.p+"static/media/docs.f7d8b9a8.png",share_namespaceObject=__webpack_require__.p+"static/media/share.161528bb.png",figma_plugin_namespaceObject=__webpack_require__.p+"static/media/figma-plugin.9335a1a9.png",testing_namespaceObject=__webpack_require__.p+"static/media/testing.c720ced2.png",accessibility_namespaceObject=__webpack_require__.p+"static/media/accessibility.2dbc6973.png",theming_namespaceObject=__webpack_require__.p+"static/media/theming.e93de094.png",addon_library_namespaceObject=__webpack_require__.p+"static/media/addon-library.7a58d2cb.png",RightArrow=()=>{let _components=Object.assign({svg:"svg",path:"path"},(0,lib.ah)());return(0,jsx_runtime.jsx)(_components.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:(0,jsx_runtime.jsx)(_components.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Configure your project"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"sb-container",children:[(0,jsx_runtime.jsxs)("div",{className:"sb-section-title",children:[(0,jsx_runtime.jsx)(_components.h1,{id:"configure-your-project",children:"Configure your project"}),(0,jsx_runtime.jsx)(_components.p,{children:"Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community."})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-section",children:[(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:styling_namespaceObject,alt:"A wall of logos representing different styling technologies"}),(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Add styling and CSS"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook."}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:["Learn more",(0,jsx_runtime.jsx)(RightArrow,{})]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:context_namespaceObject,alt:"An abstraction representing the composition of data for a component"}),(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Provide context and mocking"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available."}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking",target:"_blank",children:["Learn more",(0,jsx_runtime.jsx)(RightArrow,{})]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:assets_namespaceObject,alt:"A representation of typography and image assets"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Load assets and resources"}),(0,jsx_runtime.jsxs)("p",{className:"sb-section-item-paragraph",children:["To link static files (like fonts) to your projects and stories, use the\n",(0,jsx_runtime.jsx)(_components.code,{children:"staticDirs"})," configuration option to specify folders to load when\nstarting Storybook."]}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/docs/react/configure/images-and-assets",target:"_blank",children:["Learn more",(0,jsx_runtime.jsx)(RightArrow,{})]})]})]})]})]}),"\n",(0,jsx_runtime.jsxs)("div",{className:"sb-container",children:[(0,jsx_runtime.jsxs)("div",{className:"sb-section-title",children:[(0,jsx_runtime.jsx)(_components.h1,{id:"do-more-with-storybook",children:"Do more with Storybook"}),(0,jsx_runtime.jsx)(_components.p,{children:"Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs."})]}),(0,jsx_runtime.jsx)("div",{className:"sb-section",children:(0,jsx_runtime.jsxs)("div",{className:"sb-features-grid",children:[(0,jsx_runtime.jsxs)("div",{className:"sb-grid-item",children:[(0,jsx_runtime.jsx)("img",{src:docs_namespaceObject,alt:"A screenshot showing the autodocs tag being set, pointing a docs page being generated"}),(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Autodocs"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"Auto-generate living,\ninteractive reference documentation from your components and stories."}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/docs/react/writing-docs/autodocs",target:"_blank",children:["Learn more",(0,jsx_runtime.jsx)(RightArrow,{})]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-grid-item",children:[(0,jsx_runtime.jsx)("img",{src:share_namespaceObject,alt:"A browser window showing a Storybook being published to a chromatic.com URL"}),(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Publish to Chromatic"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"Publish your Storybook to review and collaborate with your entire team."}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/docs/react/sharing/publish-storybook#publish-storybook-with-chromatic",target:"_blank",children:["Learn more",(0,jsx_runtime.jsx)(RightArrow,{})]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-grid-item",children:[(0,jsx_runtime.jsx)("img",{src:figma_plugin_namespaceObject,alt:"Windows showing the Storybook plugin in Figma"}),(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Figma Plugin"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"Embed your stories into Figma to cross-reference the design and live\nimplementation in one place."}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/docs/react/sharing/design-integrations#embed-storybook-in-figma-with-the-plugin",target:"_blank",children:["Learn more",(0,jsx_runtime.jsx)(RightArrow,{})]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-grid-item",children:[(0,jsx_runtime.jsx)("img",{src:testing_namespaceObject,alt:"Screenshot of tests passing and failing"}),(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Testing"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"Use stories to test a component in all its variations, no matter how\ncomplex."}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/docs/react/writing-tests",target:"_blank",children:["Learn more",(0,jsx_runtime.jsx)(RightArrow,{})]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-grid-item",children:[(0,jsx_runtime.jsx)("img",{src:accessibility_namespaceObject,alt:"Screenshot of accessibility tests passing and failing"}),(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Accessibility"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"Automatically test your components for a11y issues as you develop."}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/docs/react/writing-tests/accessibility-testing",target:"_blank",children:["Learn more",(0,jsx_runtime.jsx)(RightArrow,{})]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-grid-item",children:[(0,jsx_runtime.jsx)("img",{src:theming_namespaceObject,alt:"Screenshot of Storybook in light and dark mode"}),(0,jsx_runtime.jsx)("h4",{className:"sb-section-item-heading",children:"Theming"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"Theme Storybook's UI to personalize it to your project."}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/docs/react/configure/theming",target:"_blank",children:["Learn more",(0,jsx_runtime.jsx)(RightArrow,{})]})]})]})})]}),"\n",(0,jsx_runtime.jsxs)("div",{className:"sb-addon",children:[(0,jsx_runtime.jsxs)("div",{className:"sb-addon-text",children:[(0,jsx_runtime.jsx)("h4",{children:"Addons"}),(0,jsx_runtime.jsx)("p",{className:"sb-section-item-paragraph",children:"Integrate your tools with Storybook to connect workflows."}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/integrations/",target:"_blank",children:["Discover all addons",(0,jsx_runtime.jsx)(RightArrow,{})]})]}),(0,jsx_runtime.jsx)("div",{className:"sb-addon-img",children:(0,jsx_runtime.jsx)("img",{src:addon_library_namespaceObject,alt:"Integrate your tools with Storybook to connect workflows."})})]}),"\n",(0,jsx_runtime.jsxs)("div",{className:"sb-section sb-socials",children:[(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:github,alt:"Github logo",className:"sb-explore-image"}),(0,jsx_runtime.jsx)(_components.p,{children:"Join our contributors building the future of UI development."}),(0,jsx_runtime.jsxs)("a",{href:"https://github.com/storybookjs/storybook",target:"_blank",children:["Star on GitHub",(0,jsx_runtime.jsx)(RightArrow,{})]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:discord,alt:"Discord logo",className:"sb-explore-image"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Get support and chat with frontend developers."}),(0,jsx_runtime.jsxs)("a",{href:"https://discord.gg/storybook",target:"_blank",children:["Join Discord server",(0,jsx_runtime.jsx)(RightArrow,{})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:youtube,alt:"Youtube logo",className:"sb-explore-image"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Watch tutorials, feature previews and interviews."}),(0,jsx_runtime.jsxs)("a",{href:"https://www.youtube.com/@chromaticui",target:"_blank",children:["Watch on YouTube",(0,jsx_runtime.jsx)(RightArrow,{})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"sb-section-item",children:[(0,jsx_runtime.jsx)("img",{src:tutorials,alt:"A book",className:"sb-explore-image"}),(0,jsx_runtime.jsx)("p",{children:"Follow guided walkthroughs on for key workflows."}),(0,jsx_runtime.jsxs)("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",children:["Discover tutorials",(0,jsx_runtime.jsx)(RightArrow,{})]})]})]}),"\n",(0,jsx_runtime.jsx)("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `})]})}let Configure=function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=stories-Configure-mdx.ccb197fe.iframe.bundle.js.map