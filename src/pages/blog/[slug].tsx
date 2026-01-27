import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find((post) =>
    post.slug.toLocaleLowerCase() === slug.toLocaleLowerCase(),
  );
  return (
    <main className="py-10 sm:py-20 mt-7 sm:mt-8">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm">{post?.slug}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg: grid-col-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                alt={post?.title ?? "Úsuario"}
                src={post?.image ?? ""}
                priority
                fill
                className="object-cover"
              />
            </figure>
          </article>
        </div>
      </div>
    </main>
  );
}
