import { ArticleRoute, articleMetadata, articleParams } from "@/lib/i18n/pages";

/** Every article in every language is prerendered; its slug is translated (see src/content/blog.ts). */
export function generateStaticParams() {
  return articleParams();
}

// Every article is prerendered (above); the slug is read before any Suspense boundary to redirect a slug of
// another language, so the route opts out of instant-navigation validation (as `[...rest]` does).
export const instant = false;

export const generateMetadata = articleMetadata;
export default ArticleRoute;
