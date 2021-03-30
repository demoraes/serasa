import '@emotion/styled';

import theme from '../styles/theme';

export type ThemeType = typeof theme

declare module '@emotion/styled' {
  export interface Theme extends ThemeType {}
}
