const parseQuery = (params: Record<string, string | number | boolean>): string => {
  return Object.keys(params)
    .filter((key) => !!params[key])
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
};

export { parseQuery };
