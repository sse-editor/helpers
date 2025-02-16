/**
 * Debouncing method
 * Call method after passed time
 *
 * Note that this method returns Function and declared variable need to be called
 * @param func - function that we're throttling
 * @param wait - time in milliseconds
 * @param immediate - call now
 * @returns void
 */
export function debounce(
  func: (...args: unknown[]) => void,
  wait?: number,
  immediate?: boolean
): () => void {
  let timeout: number | undefined = undefined;
  return (...args) => {
    const context = this;
    const later = () => {
      timeout = undefined;
      if (immediate !== true) {
        func.apply(context, args);
      }
    };
    const callNow = immediate === true && timeout !== undefined;
    window.clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}
