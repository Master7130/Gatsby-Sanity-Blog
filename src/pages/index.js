import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Posts from "../components/Posts"

export const query = graphql`
  {
    allSanityPost {
      nodes {
        _id
        slug {
          current
        }
        category {
          category
        }
        title
        coverImage {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`

const IndexPage = ({ data: { allSanityPost: { nodes } } }) => {
  return (
    <Layout>
      <Posts data={nodes} />
    </Layout>
  )
}

export default IndexPage
