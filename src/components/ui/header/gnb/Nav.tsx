import { NavEventType } from "@customTypes/layout";
import React from "react";
import styled from "styled-components";
import BottomMenu from "./BottomMenu";
import TopMenu from "./TopMenu";

const MainNavStyle = styled.nav<{ $isShowNav: boolean }>`
  display: ${(props) => props.$isShowNav && "grid"};
  grid-template-columns: ${(props) => props.$isShowNav && "repeat(8, 1fr)"};
  text-align: center;
  width: 850px;
`;

const Nav = ({ $isShowNav }: NavEventType) => {
  return (
    <MainNavStyle $isShowNav={$isShowNav}>
      <TopMenu $isShowNav={$isShowNav} />
      {$isShowNav && <BottomMenu />}
    </MainNavStyle>
  );
};
export default React.memo(Nav);
