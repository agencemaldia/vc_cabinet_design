"use client";

import { useLayoutEffect } from "react";

/**
 * Marks <html data-page="…"> with the page being shown; the design styles are scoped on it
 * (src/styles/design-*.css).
 *
 * Next keeps recently visited pages mounted but hidden (React <Activity>), so page styles can't be
 * keyed on elements in the document. The layout effect runs when a page is shown and its cleanup
 * when it is hidden; the inline script covers the first paint, before hydration.
 */
export function PageAttribute({ page }: { page: string }) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.page = page;
    return () => {
      if (root.dataset.page === page) delete root.dataset.page;
    };
  }, [page]);

  return (
    <script
      // Runs while the HTML is parsed on a full page load; ignored on client-side navigation.
      dangerouslySetInnerHTML={{ __html: `document.documentElement.dataset.page=${JSON.stringify(page)}` }}
    />
  );
}
