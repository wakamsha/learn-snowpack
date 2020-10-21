export const Color = {
  Primary: '#7e808c',
  Inverse: '#D2397C',
} as const;
export type Color = ValueOf<typeof Color>;

export const FontFamily = {
  Regular: 'system-ui',
} as const;

export const Duration = {
  Fade: '0.15s',
  Enter: '0.25s',
  Leave: '0.3s',
} as const;

export const Easing = {
  Enter: 'cubic-bezier(.11, .57, .14, 1)',
  Leave: 'cubic-bezier(0, .14, .75, 1)',
  Filter: 'cubic-bezier(0, 2.5, 0.2, 2.5)',
} as const;
