import { injectGlobal } from '@emotion/css';
import { FontFamily } from '../constants/Style';

/**
 * Margin や Padding など余白の値を算出して返す。
 *
 * 余白は 4 の倍数として定義されている。
 * @param value
 */
export function gutter(value: number): string {
  return `${4 * value}px`;
}

/**
 * 矩形サイズを返す。
 *
 * @param value 一辺の長さ
 */
export function square(value: string | number) {
  return {
    width: value,
    height: value,
  };
}

export function applyGlobalStyle() {
  injectGlobal({
    // Reset
    // 以下を参考
    // https://github.com/hankchizljaw/modern-css-reset/blob/master/dist/reset.min.css
    '*, *:before, *:after': {
      boxSizing: 'border-box',
    },
    html: {
      overflowX: 'hidden',
      fontFamily: 'sans-serif',
      webkitTextSizeAdjust: '100%',
      webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      scrollBehavior: 'smooth',
    },
    body: {
      minHeight: '100vh',
      textRendering: 'optimizeSpeed',
      lineHeight: 1.5,
    },
    'a:not([class])': {
      textDecorationSkipInk: 'auto',
    },
    'img, picture': {
      display: 'block',
      maxWidth: '100%',
    },
    'input, button, textarea, select': {
      font: 'inherit',
    },

    // Scaffold
    'html, body': {
      padding: 0,
      margin: 0,
      fontFamily: FontFamily.Regular,
      fontWeight: 500,
      fontFeatureSettings: `'palt' 1`,
    },
    'body, figure, blockquote, dl, dd': {
      margin: 0,
    },
    // 'ul, ol': {
    //   padding: 0,
    //   listStyle: 'none',
    // },
    a: {
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  });
}
