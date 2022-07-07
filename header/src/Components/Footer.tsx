import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: #222;
  color: #eee;
  min-height: 0;
  width: 100%;
`
const CopyrightText = styled.p`
  margin: 0;
  font-size: 11px;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyrightText>&copy; 2022 KP Len | All Rights Reserved</CopyrightText>
    </FooterWrapper>
  );
};

export default Footer;