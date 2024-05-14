declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    form: string;
    formInput: string;
    formTitle: string;
    inputMui: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
