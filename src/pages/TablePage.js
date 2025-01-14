import Table from "../component/Table";

function TablePage() {
  const data = [
    { name: "پرتغال", color: "bg-orange-500", score: 5 },
    { name: "سیب", color: "bg-red-500", score: 3 },
    { name: "موز", color: "bg-yellow-500", score: 1 },
    { name: "لیمو", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { lable: "name", render: (fruit) => fruit.name },
    { lable: "color", render:(fruit)=><div className={`p-3 m-2 ${fruit.color}`} />},
    { lable: "score" ,render:(fruit)=>fruit.score},
  ];


  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
}

export default TablePage;
