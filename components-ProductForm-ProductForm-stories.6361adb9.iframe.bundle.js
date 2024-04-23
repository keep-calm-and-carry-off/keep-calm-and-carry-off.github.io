(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[254],{"./src/components/ProductForm/ProductForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProductForm_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[17].use[1]!./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[17].use[2]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProductForm/styles.module.scss"),styles_module_default=__webpack_require__.n(styles_module),options={};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(styles_module_default(),options),styles_module_default()&&styles_module_default().locals&&styles_module_default().locals;let ProductForm_stories={title:"Форма для добавления или редактирования товара",component:function(){var _useForm=(0,index_esm.cI)({mode:"onBlur",defaultValues:{name:"",description:"",price:0,img:""}}),register=_useForm.register,handleSubmit=_useForm.handleSubmit,reset=_useForm.reset,_useForm_formState=_useForm.formState,errors=_useForm_formState.errors,isValid=_useForm_formState.isValid;return react.createElement("form",{className:styles_module.form,onSubmit:handleSubmit(function(values){alert(JSON.stringify(values)),reset()})},react.createElement("h1",null,"Добавление/Редактирование продукта"),react.createElement("div",{className:styles_module.formInput},react.createElement("label",{htmlFor:"name"},"Наименование"),react.createElement("input",_object_spread({id:"name",type:"text"},register("name",{required:!0,minLength:{value:3,message:"Минимально допустимо 3 символа"}}))),errors.name&&react.createElement("p",{style:{color:"red"}},errors.name.message)),react.createElement("div",{className:styles_module.formInput},react.createElement("label",{htmlFor:"description"},"Описание"),react.createElement("input",_object_spread({id:"description",type:"text"},register("description",{required:!0,minLength:{value:3,message:"Минимально допустимо 3 символа"}}))),errors.description&&react.createElement("p",{style:{color:"red"}},errors.description.message)),react.createElement("div",{className:styles_module.formInput},react.createElement("label",{htmlFor:"price"},"Цена"),react.createElement("input",_object_spread({id:"price",type:"number"},register("price",{required:!0}))),errors.price&&react.createElement("p",{style:{color:"red"}},errors.price.message)),react.createElement("div",{className:styles_module.formInput},react.createElement("label",{htmlFor:"img"},"Ссылка на фото"),react.createElement("input",_object_spread({id:"img",type:"text"},register("img"))),errors.img&&react.createElement("p",{style:{color:"red"}},errors.img.message)),react.createElement("hr",null),react.createElement("button",{type:"submit",disabled:!isValid},"Отправить"))}};var Default={args:{primary:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    primary: true\n  }\n}",...Default.parameters?.docs?.source}}};let __namedExportsOrder=["Default"]},"./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[17].use[1]!./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[17].use[2]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./node_modules/sass-loader/dist/cjs.js!./src/components/ProductForm/styles.module.scss":module=>{module.exports={form:"form__Nq2ff",formInput:"form-input__n0Sc5"}}}]);