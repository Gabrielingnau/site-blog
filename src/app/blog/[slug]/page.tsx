import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import PostPage from "@/pages/blog-page/[slug]";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post não encontrado | SiteBlog",
      description: "Conteúdo não disponível.",
    };
  }

  const imageUrl = post.image ?? "/images/default-og.jpg";

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],

    openGraph: {
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [imageUrl],
    },
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }
  return <PostPage post={post} />;
}
