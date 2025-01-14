

function Table({data,config}) {

    const renderHeaders=config.map((column)=>{
        return <th key={column.lable}>{column.lable}</th>
    })
    const renderRows=data.map((rowData)=>{
        const renderCells=config.map((column)=>{
            return (
                <td key={column.lable} className="p-2">{column.render(rowData)}</td>
            )
        })
        return (
            <tr className="border-b" key={rowData.name}>
              {renderCells}
            </tr>
        )
    })
  return (
    <div className=" flex items-center justify-center">
     <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
              {renderHeaders}
            </tr>
        </thead>
        <tbody>
            {renderRows}
        </tbody>
     </table>
    </div>
  )
}

export default Table
