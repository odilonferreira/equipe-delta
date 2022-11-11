import { Button, Icon, DataTable } from "bold-ui";
import { useState } from "react";

interface RowType {
  municipio: string;
  comentario: string;
  versao: string;
  satisfacao: string;
  dataHora: string;
}

export default function DadosBrutosTable() {
  const [params, setParams] = useState({
    page: 0,
    size: 10,
    totalElements: allRows.length,
    totalPages: allRows.length / 10,
    sort: ["municipio"],
  });

  // const handleSortChange = (sort: string[]) =>
  //   setParams((state) => ({ ...state, sort }));
  const handlePageChange = (page: number) =>
    setParams((state) => ({ ...state, page }));
  const handleSizeChange = (size: number) =>
    setParams((state) => ({
      ...state,
      size,
      totalPages: Math.max(1, state.totalElements / size),
    }));

  // const rows = allRows
  //   // Naive sorting for example purposes:
  //   .sort((a, b) => {
  //     if (params.sort[0] === "id") {
  //       return a. - b.municipio;
  //     }
  //     if (params.sort[0] === "-id") {
  //       return b.id - a.id;
  //     }
  //     return 0;
  //   })
  //   // Naive pagination for example purposes:
  //   .slice(params.page * params.size, params.page * params.size + params.size);

  return (
    <DataTable<RowType>
      rows={allRows}
      // sort={sort}
      // onSortChange={setSort}
      loading={false}
      columns={[
        {
          name: "municipio",
          header: "Município",
          sortable: true,
          render: (item) => item.municipio,
        },
        {
          name: "comentario",
          header: "Comentário",
          render: (item) => item.comentario,
        },
        {
          name: "versao",
          header: "Versão",
          render: (item) => item.versao,
        },
        {
          name: "satisfacao",
          header: "Satisfação",
          render: (item) => item.satisfacao,
        },
        {
          name: "data",
          header: "Data",
          render: (item) => item.dataHora,
        },
        // {
        //   name: "actions",
        //   align: "right",
        //   render: (item) => (
        //     <Button size="small" skin="ghost">
        //       <Icon icon="penOutline" />
        //     </Button>
        //   ),
        // },
      ]}
    />
  );
}

// Fake data to populate table
let id = 1;
const allRows: RowType[] = Array(30)
  .fill(true)
  .reduce(
    (curr) => [
      ...curr,
      {
        municipio: "Floripa",
        comentario: "muito bom",
        versao: "5.0.0",
        satisfacao: "tudooo",
        dataHora: "10/10/10",
      },
      {
        municipio: "San Rose",
        comentario: "bom",
        versao: "5.0.1",
        satisfacao: "nada",
        dataHora: "20/20/20",
      },
      {
        municipio: "Floripa",
        comentario: "insatisfeito",
        versao: "5.0.0",
        satisfacao: "tudooo",
        dataHora: "10/10/10",
      },
      // { id: id++, name: "JOSÉ DA SILVA MOREIRA", age: 34 },
      // { id: id++, name: "ALICE BARBOSA", age: 27 },
    ],
    [] as RowType[]
  );
