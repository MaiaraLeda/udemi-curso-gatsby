import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404</h1>
    <p>Não tem nada aqui, parça :/</p>
  </Layout>
)

export default NotFoundPage
