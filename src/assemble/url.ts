/**
 *
 * @param url
 * @returns
 */
export function extractUrl(url: string) {
  try {
    return new URL(url);
  } catch {}
}

/**
 *
 * @param path
 * @returns
 */
export function cleanPath(path: string) {
  return path.replace(/\/\//g, "/");
}
