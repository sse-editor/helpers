/**
 * Return string representation of the object type
 * @param object - object to get type
 * @returns string type name of the passed object
 */
export function typeOf(object: any): string {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,  @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return Object.prototype.toString
    .call(object)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}

/**
 * Checks if passed argument is boolean
 * @param v - variable to check
 * @returns true, if passed v is of type boolean, false otherwise
 */
export function isBoolean(v: any): v is boolean {
  return typeOf(v) === "boolean";
}

/**
 * Checks if passed argument is undefined
 * @param v - variable to check
 * @returns true, if passed v is of type undefined, false otherwise
 */
export function isUndefined(v: any): v is undefined {
  return typeOf(v) === "undefined";
}

/**
 * Checks if passed argument is a string
 * @param v - variable to check
 * @returns true, if passed v is ot type string, false otherwise
 */
export function isString(v: any): v is string {
  return typeOf(v) === "string";
}

/**
 * Check if passed object is a Promise
 * @param  object - object to check
 * @returns true, if passed object is a promise, false otherwise
 */
export function isPromise(object: any): object is Promise<any> {
  return Promise.resolve(object) === object;
}

/**
 * Checks if passed argument is an object
 * @param v - object to check
 * @returns true, if passed v is of type object, false otherwise
 */
export function isObject(v: any): v is object {
  return typeOf(v) === "object";
}

/**
 * Checks if passed argument is number
 * @param v - variable to check
 * @returns true, if passed v is of type number, false otherwise
 */
export function isNumber(v: any): v is number {
  return typeOf(v) === "number";
}

/**
 * Check if passed variable is a function
 * @param fn - function to check
 * @returns true, if passed v is of type funciton, false otherwise
 */
export function isFunction(fn: any): fn is (...args: any[]) => any {
  return typeOf(fn) === "function" || typeOf(fn) === "asyncfunction";
}

/**
 * Check if passed function is a class
 * @param fn - function to check
 * @returns true, if passed fn is a class, false otherwise
 */
export function isClass(fn: any): boolean {
  return isFunction(fn) && /^\s*class\s+/.test(fn.toString());
}
