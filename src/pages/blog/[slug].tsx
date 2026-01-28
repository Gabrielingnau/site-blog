import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find(
    (post) => post.slug.toLocaleLowerCase() === slug.toLocaleLowerCase(),
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

        <div className="grid grid-cols-1 lg: grid-col-[1fr_300px] gap-6 lg:gap-12 mt-8">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                alt={post?.title ?? "Imagem do Post"}
                src={post?.image ?? ""}
                priority
                fill
                className="object-cover"
              />
            </figure>
            <header className="p-4 md:p-6 lg:p-12 pb-0">
              <h1 className="mb-8 mt-8 text-balance text-lg md:text-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  alt={post?.title ?? "Úsuario"}
                  src={post?.author.avatar ?? ""}
                  width={36}
                  height={36}
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{" "}
                    {format(parseISO(post?.date ?? ""), "dd/MM/yyyy")}
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="px-4 mt-12 md:px-6 lg:px-16">
              <Markdown content={post?.body.raw ?? ''}/>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
