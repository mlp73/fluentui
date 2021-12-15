import * as React from 'react';
import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type InputSlots = {
  /**
   * Wrapper element which visually appears to be the input and is used for borders, focus styling, etc.
   * (A wrapper is needed to properly position `contentBefore` and `contentAfter` relative to `input`.)
   *
   * The root slot receives the `className` and `style` specified directly on the `<Input>`.
   * All other top-level native props will be applied to the primary slot, `input`.
   */
  root: IntrinsicShorthandProps<'span'>;

  /**
   * The actual `<input>` element. `type="text"` will be automatically applied unless overridden.
   *
   * This is the "primary" slot, so native props specified directly on the `<Input>` will go here
   * (except `className` and `style`, which go to the `root` slot). The top-level `ref` will
   * also go here.
   */
  input: IntrinsicShorthandProps<'input'>;

  /** Element before the input text, within the input border */
  contentBefore?: IntrinsicShorthandProps<'span'>;

  /** Element after the input text, within the input border */
  contentAfter?: IntrinsicShorthandProps<'span'>;
};

/**
 * Input Props
 */
export type InputProps = Omit<
  ComponentProps<InputSlots, 'input'>,
  // `children` is unsupported. The rest of these native props have customized definitions.
  'children' | 'defaultValue' | 'onChange' | 'size' | 'value'
> & {
  /** Input can't have children. */
  children?: never;

  /**
   * Size of the input (changes the font size and spacing).
   * @default 'medium'
   */
  // This name overlaps with the native `size` prop, but that prop isn't very useful in practice
  // (we could add `htmlSize` for the native functionality if someone needs it)
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size
  size?: 'small' | 'medium' | 'large';

  /**
   * If true, the input will have inline display, allowing it be used within text content.
   * If false (the default), the input will have block display.
   */
  inline?: boolean;

  /**
   * Controls the colors and borders of the input.
   * @default 'outline'
   */
  appearance?: 'outline' | 'underline' | 'filledDarker' | 'filledLighter';

  /**
   * Default value of the input. Provide this if the input should be an uncontrolled component
   * which tracks its current state internally; otherwise, use `value`.
   *
   * (This prop is mutually exclusive with `value`.)
   */
  defaultValue?: string;

  /**
   * Current value of the input. Provide this if the input is a controlled component where you
   * are maintaining its current state; otherwise, use `defaultValue`.
   *
   * (This prop is mutually exclusive with `defaultValue`.)
   */
  value?: string;

  /**
   * Called when the user changes the input's value.
   */
  onChange?: (ev: React.FormEvent<HTMLInputElement>, data: InputOnChangeData) => void;
};

/**
 * State used in rendering Input
 */
export type InputState = Required<Pick<InputProps, 'appearance' | 'inline' | 'size'>> & ComponentState<InputSlots>;

/**
 * Data passed to the `onChange` callback when a user changes the input's value.
 */
export type InputOnChangeData = {
  /** Updated input value from the user */
  value: string;
};
