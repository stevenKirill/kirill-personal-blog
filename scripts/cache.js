// Не используемый файл так как сейчас все файлы не кэшируем а берем из contentlayer

console.log('cache');

// const fs = require('fs')
// const path = require('path')
// const { allBlogs } = require('.contentlayer/generated');
// const matter = require('gray-matter')

// function postData() {
//   const files = fs.readdirSync(path.join('posts'))

//   const posts = allBlogs.map((filename) => {
//     const slug = filename.replace('.md', '')

//     const markdownWithMeta = fs.readFileSync(
//       path.join('posts', filename),
//       'utf-8'
//     )

//     const { data: frontmatter } = matter(markdownWithMeta)

//     return {
//       slug,
//       frontmatter,
//     }
// })

//   return `export const posts = ${JSON.stringify(posts)}`
// }

// try {
//   fs.readdirSync('cache')
// } catch (error) {
//   fs.mkdirSync('cache')
// }

// fs.writeFile('cache/data.js', allBlogs, function (err) {
//   if (err) return console.log(err)
//   console.log('cached...')
// })