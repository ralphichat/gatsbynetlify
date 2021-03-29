import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>Espero que sea grandioso.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="El astronauta de gatsby"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Ir a la pagina 2</Link> <br />
      <Link to="/using-typescript/">Go to "Usando TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
