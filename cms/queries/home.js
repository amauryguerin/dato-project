export default gql`
    query Home {
        home {
            homeSection {
                ... on SectionCategoryRecord {
                    category {
                        categoryName
                    }
                }
                ... on SectionModelRecord {
                    model {
                        modelName
                    }
                }
            }
            homeSeo {
                title
                description
                image {
                    url
                }
            }
        }
    }
`;