import media from "./media";

export const theme = {
  media,
  flexMixIn: (justify: string, align: string) => `
    display: flex;
    justify-content: ${justify}
    align-items: ${align}
    `,
  postionMixIn: (postion: string, top: number, left: number) => `
    postion: ${postion}
    top: ${top}
    left: ${left}
    transform: translate(-${top}%, -${left}%);
    `,
};
