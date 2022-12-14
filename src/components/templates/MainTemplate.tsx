import React from "react";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import { Wrapper } from "./MainTemplate.styled";
import MainWrapper from "./MainWrapper";

type Props = {
  children: JSX.Element | string;
};

const MainTemplate = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
