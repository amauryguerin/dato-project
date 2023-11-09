export default gql`
  query siteGlobal {
    siteHeader {
      id
      siteLogo {
        alt
        url
      }
      siteMenu {
        id
        linkTitle
        linkUrl
      }
    }
  }
`;
