import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export const query = graphql`
    query BlogPostTemplateQuery($slug: String!) {
    sanityPost(slug: {current: {eq: $slug}}) {
      title
      body
    }
  }
`

const BlogPost = ({ data: { sanityPost: { body, title } } }) => {
    console.log(body)
    return (
        <Layout>
            <ReactMarkdown>{body}</ReactMarkdown>
        </Layout>
    )
}

export default BlogPost