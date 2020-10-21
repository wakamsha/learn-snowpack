import { css, cx } from 'emotion';
import React, { ButtonHTMLAttributes, MouseEvent, ReactNode, useMemo } from 'react';
import { Color } from '../constants/Style';
import { gutter } from '../helpers/Style';

type Theme = 'neutral' | 'inverse';

type Props = Partial<
  {
    theme: Theme;
    ghost: boolean;
    children: ReactNode;
  } & XOR<
    {
      type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
      disabled: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
      tabIndex: ButtonHTMLAttributes<HTMLButtonElement>['tabIndex'];
      onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    },
    {
      /**
       * button 要素としての機能を全て無効化する。
       * <a /> でラップしたいときなどに指定すること。
       */
      noop: true;
    }
  >
>;

export const Button = ({ theme = 'neutral', ghost, type, children, disabled, onClick, tabIndex, noop }: Props) => {
  const buttonStyle = useMemo(() => cx(baseStyle, ThemeStyle[theme], ghost && GhostStyle[theme]), [theme, ghost]);

  return !noop ? (
    <button
      className={buttonStyle}
      type={type}
      tabIndex={onClick ? tabIndex : -1}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <span className={buttonStyle} tabIndex={-1}>
      {children}
    </span>
  );
};

function variantFill(color: string): string {
  return css`
    color: white;
    background-color: ${color};
    border-color: ${color};
  `;
}

function variantGhost(color: string): string {
  return css`
    color: ${color};
    background-color: transparent;
    border-color: ${color};
  `;
}

const baseStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${gutter(4)} ${gutter(8)};
  font-size: 16px;
  line-height: 1;
  color: white;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 4px;
  appearance: none;

  &:hover {
    opacity: 0.7;
  }
`;

const ThemeStyle: Record<Theme, string> = {
  neutral: variantFill(Color.Primary),
  inverse: variantFill(Color.Inverse),
} as const;

const GhostStyle: Record<Theme, string> = {
  neutral: variantGhost(Color.Primary),
  inverse: variantGhost(Color.Inverse),
} as const;
