export default gql`
    query allProducts {
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
            productCategory {
                category {
                    categoryName
                    id
                }
            }
        }
    }
`;