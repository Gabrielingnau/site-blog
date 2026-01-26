import { allPosts, Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Inbox } from "lucide-react";
import { useRouter } from "next/router";

import { Search } from "@/components/Search";

import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";

export function BlogList() {
  const router = useRouter();
  const query = (router.query.q as string) || "";

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()),
      )
    : allPosts;

  const hasPosts = posts.length > 0;
  return (
    <div className="relative py-10 sm:py-20 mt-7 sm:mt-8">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard">
        <div className="flex md:flex-row flex-col justify-between md:items-end items-start">
          <div className="flex flex-col gap-3">
            <span className="text-body-tag text-cyan-100 w-fit px-3 py-1.5 rounded-[4px] bg-cyan-300">
              BLOG
            </span>
            <h2 className="sm:text-xl text-lg text-gray-100 max-w-xl">
              Dicas e estratégias para impulsionar seu negócio
            </h2>
          </div>
          <div className="md:mt-0 mt-6 md:w-72 w-full">
            <Search />
          </div>
        </div>
        {hasPosts && (
          <PostGridCard>
            {posts.map((post) => (
              <PostCard
                author={{
                  name: post.author?.name,
                  avatar: post.author?.avatar,
                }}
                /* Usei o date-fns para resolver o bug do fuso horário + UTC. */
                date={format(parseISO(post.date), "dd/MM/yyyy")}
                description={post.description}
                image={post.image}
                slug={post.slug}
                title={post.title}
              />
            ))}
          </PostGridCard>
        )}

        {!hasPosts && (
          <div className="flex flex-1 items-center justify-center md:mt-6 mt-3">
            <div
              className="w-full flex flex-col items-center justify-center md:gap-8 gap-4
              p-8 md:p-12 rounded-lg"
            >
              <Inbox className="md:h-12 h-8 md:w-12 w-8 text-gray-300" />

              <p className="text-gray-100 text-center">
                {" "}
                Nenhum post encontrado
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
