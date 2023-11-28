export default gql`
    query productBySlug($slug: String) {
        product(filter: { productSlug: { eq: $slug } }) {
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
        }
    }
`;
