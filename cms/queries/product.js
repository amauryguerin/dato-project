export default gql`
  query product {
    allProducts {
      id
      productImage {
        alt
        url
      }
      productBrand {
        brand {
          brandName
        }
      }
      productDesc
      productDetail
      productPrice
      productSlug
      productTitle
      productModel {
        modelName
      }
    }
  }
`;
