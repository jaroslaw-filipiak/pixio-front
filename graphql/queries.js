import gql from "graphql-tag";

export const jobItemsQuery = gql`
  query jobs {
    jobs {
      id
      Title
    }
  }
`;

export const pageHomeHeroVideo = gql`
  {
    pageHome {
      hero_video_ID
    }
  }
`;

export const applyJobSidebarContent = gql`
  query applyJobSidebarQuery {
    applyJobSidebar {
      id
      image {
        url
      }
      content
    }
  }
`;

export const pageAboutContent = gql`
  query pageAboutContent {
    pageAbout {
      id
      section_background {
        url
      }
      about_content
    }
  }
`;

export const getCities = gql`
  query getCities {
    cities {
      id
      name
      icon {
        url
      }
    }
  }
`;

export const pageContactContent = gql`
  query pageContact {
    pageContact {
      id
      marketing_email
      sales_email
      general_email
      section_background {
        url
      }
    }
  }
`;

export const pageVisualProductionContent = gql`
  query pageVisualProduction {
    pageVisualProduction {
      id
      tooltip_1_image {
        url
      }
      tooltip_1_content
      tooltip_2_video_ID
      tooltip_3_img {
        url
      }
      tooltip_3_content
    }
  }
`;

export const singleJobSidebarContent = gql`
  query singleJobSidebar {
    singleJobSidebar {
      id
      image {
        url
      }
      content
    }
  }
`;
