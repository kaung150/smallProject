import React from "react";
import {motion} from 'framer-motion';
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight, FaMagnifyingGlass } from "react-icons/fa6";

// Our table component
function TableComponent({ columns, data }) {
  

  const TableInstance = useTable(
    {
      columns,
      data
    },
    useGlobalFilter, // useGlobalFilter!
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    // state,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter }
  } = TableInstance;
  
  return (
    <motion.div                 
    className={`p-3 container mx-auto font-poppinsLight text-slate-100 + `}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.5}}>
      <div className='my-3 flex justify-end items-center gap-6 text-gray-600'>
          <div className="flex flex-row items-center gap-3">
              <h1 className="text-xl text-gray-600 font-medium">Search</h1>
              <FaMagnifyingGlass className='w-5 h-5 text-gray-600' />
          </div>
          <div>
            <input
                className='p-2 w-full rounded-xl focus:outline-gray-600 border border-gray-600'
                type="text"
                value={globalFilter || ""}
                onChange={e => setGlobalFilter(e.target.value)}
            />
          </div>
      </div>

      <table {...getTableProps()} className="table-fixed w-full text-left shadow-lg border-separate border-spacing-y-3">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className='text-lg text-white bg-gradient-to-r from-gray-800 to-gray-900 dark:bg-[#2a2b32]'>
              {headerGroup.headers.map(column => (
                <td {...column.getHeaderProps()} className='p-3'>
                  {column.render("Header")}
                  {/* Render the columns filter UI */}
                </td>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i} className='text-md text-gray-700'>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className='p-3 break-words'>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* This is Pagination */}
      <div className="p-4 flex justify-between items-center flex-wrap text-gray-600">
          <div>{rows.length} results</div>
          <div className="flex flex-row gap-2">
              <span className="flex items-center">
                Page{" "}
                <p>
                  {pageIndex + 1} of {pageOptions.length}
                </p>{" "}
              </span>
              <span>
                | Go to page:{" "}
                <input
                  className="w-20 px-4 h-8 rounded-lg "
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(page);
                  }}
                />
              </span>{" "}
              <select
                className="rounded-lg px-4 h-8 bg-gray-100"
                value={pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
          </div>

          <div className="flex flex-row text-gray-600">
              <button 
                className="px-4 py-2 transition-colors duration-150 focus:shadow-outline hover:bg-gradient-to-r from-gray-800 to-gray-900 hover:text-white rounded-l-lg" 
                onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                <FaAnglesLeft />
              </button>{" "}
              <button 
                className="px-4 py-2 transition-colors duration-150 focus:shadow-outline hover:bg-gradient-to-r from-gray-800 to-gray-900 hover:text-white" 
                onClick={() => previousPage()} disabled={!canPreviousPage}>
                <FaAngleLeft />
              </button>{" "}
            
              <button 
                className="px-4 py-2 transition-colors duration-150 focus:shadow-outline hover:bg-gradient-to-r from-gray-800 to-gray-900 hover:text-white" 
                onClick={() => nextPage()} disabled={!canNextPage}>
                <FaAngleRight />
              </button>{" "}
              <button 
                className="px-4 py-2 transition-colors duration-150 focus:shadow-outline hover:bg-gradient-to-r from-gray-800 to-gray-900 hover:text-white rounded-r-lg" 
                onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                <FaAnglesRight />
              </button>{" "}
          </div>
      </div>
    </motion.div>
  );
}

export default TableComponent;
