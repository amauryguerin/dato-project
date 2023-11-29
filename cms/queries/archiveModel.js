export default gql`
    query archiveModel($slug: String) {
        productModel (filter: {modelSlug: {eq: $slug}}){
            modelName
            modelSlug
        }
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
