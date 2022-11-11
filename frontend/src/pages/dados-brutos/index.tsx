import { Heading } from "bold-ui";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import { SideMenu } from "../../components/SideMenu";

export default function DadosBrutos() {
  return (
    <>
      <Header />
      <SideMenu />
      <MainContainer>
        <Heading level={1}>Dados brutos</Heading>
      </MainContainer>
    </>
  );
}
