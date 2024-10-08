import AudieunceRecord from "@components/Audience/AudienceRecord";
import RankingTab from "@components/common/RankingTab.tsx";
import styled from "styled-components";
import AccrueAudience from "../components/Audience/AccrueAudience.tsx";

const AudienceWrapper = styled.div`
  width: 100%;
`;

const Audience = () => {
  return (
    <AudienceWrapper>
      <RankingTab />
      <AccrueAudience />
      <AudieunceRecord />
    </AudienceWrapper>
  );
};

export default Audience;
