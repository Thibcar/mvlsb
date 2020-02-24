import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header/header";
import Slider from '../components/homepage/slider';
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Slider />
  </Layout>
)

export default IndexPage
