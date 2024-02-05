declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    containerSlider: string;
    containerSliderHorizontal: string;
    containerSliderVertical: string;
    fillSlider: string;
    promt: string;
    promtVertical: string;
    root: string;
    rootVariantHorizontal: string;
    rootVariantVertical: string;
    thumb: string;
    thumbHorizontal: string;
    thumbVertical: string;
    values: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
