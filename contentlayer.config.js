import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    category: { type: "string", required: true },
    date: { type: "string", required: true },
    excerpt: { type: "string", required: true },
    cover_image: { type: "string", required: true },
    first_text: { type: "string", required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypePrism],
  },
});

export default contentLayerConfig;
