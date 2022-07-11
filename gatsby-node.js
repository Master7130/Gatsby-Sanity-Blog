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
        const { id, slug = {} } = edge.node
        const x = edge.node.slug.current
        actions.createPage({
            path: x,
            component: require.resolve(`./src/templates/blog-post.js`),
            context: { id },
        })
    })
}