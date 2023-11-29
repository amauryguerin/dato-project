export default gql`
    query archiveBrand($slug: String) {
        productBrand (filter: {brandSlug: {eq: $slug}}){
            brandName
            brandSlug
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
