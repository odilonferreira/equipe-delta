import { Heading, TextField, HFlow, Button, VFlow } from "bold-ui";
import DadosBrutosTable from "../../components/DadosBrutosTable";
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
        <Heading level={3}>Pesquisa por palavra-chave</Heading>
        <VFlow>
          <HFlow>
            <TextField
              style={{ width: "100%" }}
              // label="Pesquisa por palavra-chave"
              placeholder="Digite seus termos de busca"
            />
            <TextField
              style={{ width: "100%" }}
              // label="Módulo"
              placeholder="Todos os módulos"
            />
          </HFlow>
          <Button kind="primary">Pesquisar</Button>
          <DadosBrutosTable />
        </VFlow>
      </MainContainer>
    </>
  );
}
