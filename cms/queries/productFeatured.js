export default gql`
  query productFeatured {
    allProducts(filter: { productFeatured: { eq: "true" } }) {
      id
      productSlug
      productImage {
        alt
        url
      }
    }
  }
`;
