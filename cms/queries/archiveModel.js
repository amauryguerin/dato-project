export default gql`
    query archiveModel($slug: String) {
        productModel (filter: {modelSlug: {eq: $slug}}){
            modelName
            modelSlug
        }
        allProducts {
            id
            productTitle
            productDetail
            productDesc(markdown: true)
            productPrice
            productSlug
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
            productModel {
                modelName
                modelSlug
            }
            productCategory {
                category {
                    categoryName
                    categorySlug
                }
            }
        }
    }
`;
