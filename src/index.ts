import { useMemo } from "react";
import * as queryString from "query-string";

/**
 * Extracts a parameter from the query string and return it as a string.
 * @param paramName - The name of the paramater to extract.
 */
export function useQueryString(paramName: string): string | null;

/**
 * Extracts `paramName` from the query string and optionally transforms it using the
 * transformer function passed as second argument.
 *
 * @param paramName - The name of the parameter to extract from the query string.
 * @param transformer - Optional transfomer function to transform the extracted parameter before returning it.
 *
 *
 * @example
 * ```js
 * import useQueryString from "use-query-string";
 *
 * const Component = () => {
 *   const username = useQueryString("username"); // => string
 *   const count = useQueryString("count", parseInt); // => number
 *
 *   // ... use the values
 * };
 * ```
 */
export function useQueryString<T>(
  paramName: string,
  transformer: (value: string) => T
): T | null;

export function useQueryString<T>(
  paramName: string,
  transformer?: (value: string) => T
): string | T | null {
  const search = typeof window !== "undefined" ? window.location.search : "";
  const parsed = useMemo(() => queryString.parse(search), [search]);
  const value = parsed[paramName] as string | null | undefined;

  if (value) {
    if (transformer) {
      try {
        return transformer(value);
      } catch (err) {
        console.log(`Error transforming ${paramName} that has value ${value}`);
        return null;
      }
    } else {
      return value;
    }
  } else {
    return null;
  }
}
