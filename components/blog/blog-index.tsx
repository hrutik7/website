import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import Image from "next/image";
import { type Page } from "nextra";

export const BlogIndex = ({ maxItems }: { maxItems?: number }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
    {(getPagesUnderRoute("/blog") as Array<Page & { frontMatter: any }>)
      .slice(0, maxItems)
      .map((page) => (
        <Link key={page.route} href={page.route} className="block mb-8 group">
          <div className="mt-4 rounded-md relative aspect-[2/1] overflow-hidden">
            <Image
              src={
                page.frontMatter.ogImage ||
                `/api/og?title=${encodeURIComponent(page.frontMatter.title)}`
              }
              className="object-cover transform group-hover:scale-105 transition-transform"
              alt={page.frontMatter?.title ?? "Blog post image"}
              fill={true}
            />
          </div>
          <div className="block font-semibold mt-8 text-2xl opacity-90 group-hover:opacity-100">
            {page.meta?.title || page.frontMatter?.title || page.name}
          </div>
          <div className="opacity-80 mt-2 group-hover:opacity-100">
            {page.frontMatter?.description} <span>Read more →</span>
          </div>
          <div className="flex gap-2 flex-wrap mt-3 items-baseline">
            {page.frontMatter?.tag ? (
              <span className="opacity-80 text-xs py-1 px-2 ring-1 ring-gray-300 rounded-sm group-hover:opacity-100">
                {page.frontMatter.tag}
              </span>
            ) : null}
            {page.frontMatter?.date ? (
              <span className="opacity-60 text-sm group-hover:opacity-100">
                {page.frontMatter.date}
              </span>
            ) : null}
            {page.frontMatter?.author ? (
              <span className="opacity-60 text-sm group-hover:opacity-100">
                by {page.frontMatter.author}
              </span>
            ) : null}
          </div>
        </Link>
      ))}
  </div>
);
