import { CSSProp, css } from "styled-components";

type MediaQueryProps = {
  mobile: number;
  tablet: number;
  desktop: number;
};

const sizes: MediaQueryProps = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};

type BackQuoteArgs = string[];

const media = {
  mobile: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.mobile}px) {
        ${css(literals, ...args)}
      }
    `,
  tablet: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.tablet}px) {
        ${css(literals, ...args)}
      }
    `,
  desktop: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.desktop}px) {
        ${css(literals, ...args)}
      }
    `,
  desktopHuge: (
    literals: TemplateStringsArray,
    ...args: BackQuoteArgs
  ): CSSProp =>
    css`
      @media only screen and (min-width: 1025px) {
        ${css(literals, ...args)}
      }
    `,
} as Record<
  keyof typeof sizes,
  (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp
>;

export default media;
