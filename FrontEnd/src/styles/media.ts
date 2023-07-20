import { CSSProp, css } from "styled-components";

type MediaQueryProps = {
  desktop: number;
};

const sizes: MediaQueryProps = {
  desktop: 1086,
};

type BackQuoteArgs = string[];

const media = {
  desktop: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.desktop}px) {
        ${css(literals, ...args)}
      }
    `,
} as Record<
  keyof typeof sizes,
  (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp
>;

export default media;
