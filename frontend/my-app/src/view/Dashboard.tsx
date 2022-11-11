import { Button, Heading, HFlow, TextField, VFlow } from "bold-ui";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import { SideMenu } from "../components/SideMenu";
import RespostaVersao from "../components/RespostaVersao";
import DadosBrutosTable from "../components/DadosBrutosTable";

export default function Dashboard() {
  return (
    <>
      <Header />
      <SideMenu />
      <MainContainer>
        <Heading level={1}>Dashboard</Heading>
        <Heading level={1}>Dados brutos</Heading>
        {/* <Heading level={3}>Pesquisa por palavra-chave</Heading> */}
        <VFlow>
          <HFlow hSpacing={5}>
            <TextField
              style={{ width: "100%" }}
              label="Pesquisa por palavra-chave"
              placeholder="Digite seus termos de busca"
            />
            <TextField
              style={{ width: "100%" }}
              label="Módulo"
              placeholder="Todos os módulos"
            />
          </HFlow>
          <Button kind="primary">Pesquisar</Button>
          <DadosBrutosTable />
          <RespostaVersao />
        </VFlow>
        
      </MainContainer>
    </>
  );
}