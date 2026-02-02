import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";

import { BlogList } from "@/templates/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dicas, tutoriais e estratégias práticas para impulsionar seu negócio digital.",

  openGraph: {
    title: "Blog — Dicas para Criar e Escalar Projetos Digitais",
    description:
      "Conteúdos sobre desenvolvimento, negócios e estratégias para crescer no digital.",
  },
};

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return <BlogList posts={sortedPosts} />;
}
