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
    siteFooter {
        id
        siteLogoFooter {
            alt
            url
        }
        footerSubmenuChoice {
        footerSubmenuTitle
        footerSubmenu {
            id
            linkTitle
            linkUrl
      }
      }
      }
  }
`;
