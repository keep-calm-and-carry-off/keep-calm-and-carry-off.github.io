declare namespace StylesModuleScssNamespace {
  export interface IStylesModuleScss {
    activationSwitcher: string;
    active: string;
    deactivationSwitcher: string;
    slider: string;
    sliderActive: string;
    sliderDeactive: string;
    switcher: string;
  }
}

declare const StylesModuleScssModule: StylesModuleScssNamespace.IStylesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesModuleScssNamespace.IStylesModuleScss;
};

export = StylesModuleScssModule;
