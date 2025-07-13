const RESET_PARAMS = ["start", "tbs", "tbm", "udm"] as const;

const updateSearchParams = (updates: Record<string, string>) => {
  const url = new URL(location.href);

  RESET_PARAMS.forEach((param) => url.searchParams.delete(param));

  Object.entries(updates).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });

  location.href = url.href;
};

export const searchAll = () => updateSearchParams({});
export const searchImage = () => updateSearchParams({ tbm: "isch" });
export const searchVideo = () => updateSearchParams({ tbm: "vid" });
export const searchNews = () => updateSearchParams({ tbm: "nws" });
export const searchVerbatim = () => updateSearchParams({ tbs: "li:1" });

export const searchMap = () => {
  const q = new URL(location.href).searchParams.get("q");
  location.href = `/maps/search/${q}`;
};
export const searchByTime = (id: string) => {
  const el: HTMLAnchorElement | null = document.querySelector(`#${id} a`);
  if (!el) return;
  el.click();
};
