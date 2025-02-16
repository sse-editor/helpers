/**
 * Returns basic key codes as constants
 * @returns {{}}
 */
interface KeyCodes {
  BACKSPACE: number;
  TAB: number;
  ENTER: number;
  SHIFT: number;
  CTRL: number;
  ALT: number;
  ESC: number;
  SPACE: number;
  LEFT: number;
  UP: number;
  DOWN: number;
  RIGHT: number;
  DELETE: number;
  META: number;
  SLASH: number;
}

export const keyCodes: KeyCodes = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191,
};

/**
 * Return mouse buttons codes
 */
interface MouseButtons {
  LEFT: number;
  WHEEL: number;
  RIGHT: number;
  BACKWARD: number;
  FORWARD: number;
}

export const mouseButtons: MouseButtons = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4,
};
