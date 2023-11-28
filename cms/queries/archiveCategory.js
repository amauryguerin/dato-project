export default gql`
    query archiveCategory($slug: String) {
        productCategory (filter: {categorySlug: {eq: $slug}}){
            categoryName
            categorySlug
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
                }
            }
            productModel {
                modelName
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