declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    activeLink: string;
    navLink: string;
    navigationBar: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
