"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * Marks <html data-page="…"> with the page being shown; the design styles are scoped on it
 * (src/styles/design-*.css).
 *
 * Next keeps recently visited pages mounted but hidden (React <Activity>), so page styles can't be
 * keyed on elements in the document. The layout effect runs when a page is shown and its cleanup
 * when it is hidden.
 *
 * On a full page load the attribute must be there before the first paint, so the server HTML carries
 * a tiny inline script. React can't run scripts it creates in the browser (and warns about them), so
 * the script is only rendered for the server HTML and its hydration — `inBrowser` is false there and
 * true when the page mounts during client-side navigation, where the layout effect does the job.
 */
export function PageAttribute({ page }: { page: string }) {
  const inBrowser = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.page = page;
    return () => {
      if (root.dataset.page === page) delete root.dataset.page;
    };
  }, [page]);

  if (inBrowser) return null;
  return (
    <script dangerouslySetInnerHTML={{ __html: `document.documentElement.dataset.page=${JSON.stringify(page)}` }} />
  );
}
