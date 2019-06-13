import { graphql, Link } from 'gatsby'
import React from 'react'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DateText from '../components/date-text'
import { rhythm } from '../utils/typography'
import pkg from '../../package.json'

const BlogIndex = (props: any) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO keywords={pkg.keywords} pathname={props.uri} />
      <Bio />
      {posts.map(({ node: mdNode }: any) => {
        const title = mdNode.frontmatter.title || mdNode.fields.slug
        return (
          <div key={mdNode.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: 'none' }} to={mdNode.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>
              <DateText {...mdNode.frontmatter} />
            </small>
            <p
              dangerouslySetInnerHTML={{
                __html: mdNode.frontmatter.description || mdNode.excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            collection
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            lastUpdated(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
