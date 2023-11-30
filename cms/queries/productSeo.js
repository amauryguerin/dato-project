export default gql`
    query productSeo {
        allProductCategories {
            categorySeo {
                title
                description
                image {
                    url
                }
            }
            categorySlug
        }
        allProductModels {
            modelSeo {
                title
                description
                image {
                    url
                }
            }
            modelSlug
        }
    }
`;
