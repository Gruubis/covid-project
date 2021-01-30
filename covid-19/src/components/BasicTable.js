import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'

export const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => undefined, [])

    const tableInstance = useTable({
        columns,
        data
     })

     const { getTableProps, getTableBodyProps, headerGroupps, rows, prepareRow} = tableInstance
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroupps.map((headergroup) => (
                <tr {...headergroup.getHeaderGroupProps()}>
                    {
                        headergroup.headers.map ((column) => (

                            <th {...column.getHeaderProps()}>{column.render('Header')}
               </th>
                         ) )
                    }
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                            
                          </tr>
                        );
                    })
                }
  
            </tbody>

        </table>

        
    )
}