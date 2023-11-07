export default gql`
  query productBySlug($slug: String) {
    product(filter: { productSlug: { eq: $slug } }) {
      id
      productTitle
      productDetail
      productDesc
      productPrice
      productSlug
      productModel
      productImage {
        alt
        url
      }
      productMeta {
        image {
          url
          alt
        }
      }
    }
  }
`;
