// import rehypeDocument from 'rehype-document'
// import rehypeFormat from 'rehype-format'
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const markdown = async (input: string) =>
  String(
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      //   .use(rehypeDocument, {title: '👋🌍'})
      //   .use(rehypeFormat)
      .use(rehypeStringify)
      .process(input),
  );

export default markdown;
// console.log(String(file));
