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
      productDesc(markdown: true)
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
