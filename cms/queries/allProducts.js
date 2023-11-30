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
                    brandSlug
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
            productSeo {
                title
                description
                image {
                    url
                }
            }
        }
    }
`;