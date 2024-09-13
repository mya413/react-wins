import styled from "styled-components";
import Container from "../Common/Container";
import Description from "../Common/Description";
import Shortcut from "../Common/Shortcut";
import Text from "../Common/Text";

const ParkingStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.8), transparent 44%, transparent);
  border-radius: 20px;
`;

const Parking = () => {
  return (
    <Container
      to="#"
      $bgImage="https://cdn.pixabay.com/photo/2016/08/02/15/47/baseball-1563851_1280.jpg"
      target="_self">
      <ParkingStyle>
        <Text text="수원 케이티 위즈 파크" $fontSize="13px" $fontWeight="700" $color="#f53232" $marginBottom="10px" />
        <Description
          desc="사전 주차 예약제 안내"
          $fontSize="24px"
          $fontWeight="500"
          $color="#000"
          $marginBottom="30px"
          $textShadow="0 3px 6px rgba(0,0,0,.16)"
        />
        <Shortcut $fontSize="13px" $fontWeight="300" $color="#000" shortcut="사전주차 예약하기" />
      </ParkingStyle>
    </Container>
  );
};
export default Parking;
