export default gql`
    query archiveBrand($slug: String) {
        productBrand (filter: {brandSlug: {eq: $slug}}){
            brandName
            brandSlug
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
                modelSlug
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
