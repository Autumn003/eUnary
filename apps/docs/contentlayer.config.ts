// @ts-nocheck

import { getHighlighter } from '@shikijs/compat';
import {
    defineDocumentType,
    defineNestedType,
    makeSource,
} from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { codeImport } from 'remark-code-import';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

// import { rehypeComponent } from "./lib/rehype-component"
// import { rehypeNpmCommand } from "./lib/rehype-npm-command"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: 'string',
        // resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
        resolve: (doc) => doc._raw.flattenedPath,
    },
};

// const LinksProperties = defineNestedType(() => ({
//     name: 'LinksProperties',
//     fields: {
//         doc: {
//             type: 'string',
//         },
//         api: {
//             type: 'string',
//         },
//     },
// }));

export const Doc = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        featured: {
            type: 'boolean',
            default: false,
            required: false,
        },
        // published: {
        //     type: 'boolean',
        //     default: true,
        // },
        // links: {
        //     type: 'nested',
        //     of: LinksProperties,
        // },
        // component: {
        //     type: 'boolean',
        //     default: false,
        //     required: false,
        // },
        // toc: {
        //     type: 'boolean',
        //     default: true,
        //     required: false,
        // },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Doc],
    mdx: {
        remarkPlugins: [remarkGfm, codeImport],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark',
                    keepBackground: false,
                    onVisitLine(node) {
                        if (node.children.length === 0) {
                            node.children = [{ type: 'text', value: ' ' }];
                        }
                    },
                    onVisitHighlightedLine(node) {
                        if (!node.properties.className) {
                            node.properties.className = []; // Initialize if undefined
                        }
                        node.properties.className.push('line--highlighted');
                    },
                    onVisitHighlightedWord(node) {
                        if (!node.properties.className) {
                            node.properties.className = []; // Initialize if undefined
                        }
                        node.properties.className.push('word--highlighted');
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['subheading-anchor'],
                        ariallabel: 'Link to section',
                    },
                },
            ],
        ],
    },
});

// export default makeSource({
//     contentDirPath: './docs',
//     documentTypes: [Doc],
//     mdx: {
//         remarkPlugins: [remarkGfm, codeImport],
//         rehypePlugins: [
//             rehypeSlug,
//             // rehypeComponent,
//             () => (tree) => {
//                 visit(tree, (node) => {
//                     if (node?.type === 'element' && node?.tagName === 'pre') {
//                         const [codeEl] = node.children;
//                         if (codeEl.tagName !== 'code') {
//                             return;
//                         }

//                         if (codeEl.data?.meta) {
//                             // Extract event from meta and pass it down the tree.
//                             const regex = /event="([^"]*)"/;
//                             const match = codeEl.data?.meta.match(regex);
//                             if (match) {
//                                 node.__event__ = match ? match[1] : null;
//                                 codeEl.data.meta = codeEl.data.meta.replace(
//                                     regex,
//                                     ''
//                                 );
//                             }
//                         }

//                         node.__rawString__ = codeEl.children?.[0].value;
//                         node.__src__ = node.properties?.__src__;
//                         node.__style__ = node.properties?.__style__;
//                     }
//                 });
//             },
//             [
//                 rehypePrettyCode,
//                 {
//                     theme: 'github-dark',
//                     getHighlighter,
//                     onVisitLine(node) {
//                         // Prevent lines from collapsing in `display: grid` mode, and allow empty
//                         // lines to be copy/pasted
//                         if (node.children.length === 0) {
//                             node.children = [{ type: 'text', value: ' ' }];
//                         }
//                     },
//                     onVisitHighlightedLine(node) {
//                         node.properties.className.push('line--highlighted');
//                     },
//                     onVisitHighlightedWord(node) {
//                         node.properties.className = ['word--highlighted'];
//                     },
//                 },
//             ],
//             () => (tree) => {
//                 visit(tree, (node) => {
//                     if (node?.type === 'element' && node?.tagName === 'div') {
//                         if (
//                             !(
//                                 'data-rehype-pretty-code-fragment' in
//                                 node.properties
//                             )
//                         ) {
//                             return;
//                         }

//                         const preElement = node.children.at(-1);
//                         if (preElement.tagName !== 'pre') {
//                             return;
//                         }

//                         preElement.properties['__withMeta__'] =
//                             node.children.at(0).tagName === 'div';
//                         preElement.properties['__rawString__'] =
//                             node.__rawString__;

//                         if (node.__src__) {
//                             preElement.properties['__src__'] = node.__src__;
//                         }

//                         if (node.__event__) {
//                             preElement.properties['__event__'] = node.__event__;
//                         }

//                         if (node.__style__) {
//                             preElement.properties['__style__'] = node.__style__;
//                         }
//                     }
//                 });
//             },
//             // rehypeNpmCommand,
//             // [
//             //     rehypeAutolinkHeadings,
//             //     {
//             //         properties: {
//             //             className: ['subheading-anchor'],
//             //             ariaLabel: 'Link to section',
//             //         },
//             //     },
//             // ],
//         ],
//     },
// });

// *************************************************

// import { defineDocumentType, makeSource } from 'contentlayer/source-files';

// export const Doc = defineDocumentType(() => ({
//     name: 'Doc',
//     filePathPattern: '**/*.mdx',
//     contentType: 'mdx',
//     fields: {
//         title: { type: 'string', required: true },
//         description: { type: 'string', required: false },
//     },
//     computedFields: {
//         slugAsParams: {
//             type: 'string',
//             resolve: (doc) => doc._raw.flattenedPath,
//         },
//     },
// }));

// export default makeSource({
//     contentDirPath: 'docs',
//     documentTypes: [Doc],
// });
