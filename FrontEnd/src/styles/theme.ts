import media from "./media";

const theme = {
  media,
  flexMixIn: (justify: string, align: string) => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    `,
  positionMixIn: (postion: string, top: number, left: number) => `
    position: ${postion};
    top: ${top}%;
    right: ${left}%;
    transform: translate(-${top}%, -${left}%);
    `,
};

export default theme;
