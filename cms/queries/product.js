export default gql`
  query product {
    allProducts {
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
