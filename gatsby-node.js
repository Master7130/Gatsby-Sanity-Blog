exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allSanityPost {
        edges {
            node {
                slug {
                    current
                }
                id
            }
        }
      }
    }
  `)
  data.allSanityPost.edges.forEach(edge => {
    const slug = edge.node.slug.current
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: slug },
    })
  })
}