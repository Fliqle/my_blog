import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const Logo = ({ fill = "#fff" }: { fill?: string }) => {
  return (
    <LogoContainer>
        <h1>SIROTKIN</h1>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;
