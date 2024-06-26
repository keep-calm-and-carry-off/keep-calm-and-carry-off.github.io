declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    orderItemContainer: string;
    orderItemHeader: string;
    orderItemNumber: string;
    productContainer: string;
    productQuantity: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
