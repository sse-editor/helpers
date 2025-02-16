import { notEmpty } from "./empty";

interface UserOS {
  win: boolean;
  mac: boolean;
  x11: boolean;
  linux: boolean;
}

export function getUserOS(): UserOS {
  const OS = {
    win: false,
    mac: false,
    x11: false,
    linux: false,
  };
  const userOs = Object.keys(OS).find(
    (os) => window.navigator.appVersion.toLowerCase().indexOf(os) !== -1
  );
  if (userOs !== undefined) {
    OS[userOs] = true;
    return OS;
  }

  return OS;
}

/**
 * True if current device runs iOS
 */
export const isIosDevice = (): boolean =>
  typeof window !== "undefined" &&
  window.navigator !== null &&
  notEmpty(window.navigator.platform) &&
  (/iP(ad|hone|od)/.test(window.navigator.platform) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1));
