import '@emotion/react'

type palette =
  | 'orange'
  | 'yellow'
  | 'lightGreen'
  | 'darkGray'
  | 'gray'
  | 'lightGray'

type fontSize = 'p_h1' | 'p_h2' | 'p_h3' | 'p_h4' | 'p_h5'

type btnFontSize = 'btn_font_size--sm' | 'btn_font_size--lg'

declare module '@emotion/react' {
  export interface Theme {
    palette: Record<palette, string>
    fontSize: Record<fontSize, string>
    btnFontSize: Record<btnFontSize, string>
  }
}
