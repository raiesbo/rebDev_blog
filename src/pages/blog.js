import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

export default function BlogPage() {

	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
		  		edges {
					node{
						frontmatter {
				  			title
							date
			  			}
			  		html
			  		excerpt
					fields {
						slug
					}
					}
		  		}
			}
	  	}
	`)

	const posts = data.allMarkdownRemark.edges

	console.log(data)
	return (
		<Layout >
			<h1>Blog</h1>
			<p>Posts will show up here later on.</p>
			<ol>
				{
					posts.map((item, id) => {
						return (
							<li key={id}>
								<Link to={item.node.fields.slug}>
									<h2>{item.node.frontmatter.title}</h2>
									<p>{item.node.frontmatter.date}</p>
								</Link>
							</li>
						)
					})
				}
			</ol>
		</Layout>
	)
}