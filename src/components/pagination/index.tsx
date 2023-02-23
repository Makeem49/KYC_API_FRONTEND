import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  itemsOffset: number;
  perPage: number;
  setItemsOffset: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  dataLength: number;
}

const Pagination = (props: PaginationProps) => {
  // Change the page
  const handlePageChange = (event: any) => {
    const newOffset = (event.selected * props.perPage) % props.dataLength;
    props.setItemsOffset(newOffset);
  };
  return (
    <div className='bottom-0 right-0 left-0 w-full'>
      <div className='flex justify-between items-center px-6 rounded-md'>
        <span>
          showing &nbsp;
          {props.itemsOffset + 1} -&nbsp;
          {props.perPage + props.itemsOffset > props.dataLength
            ? props.dataLength
            : props.perPage + props.itemsOffset}
          &nbsp; of {props.dataLength} entries
        </span>

        <ReactPaginate
          breakLabel='...'
          previousLabel={
            <MdKeyboardArrowLeft className='text-4xl text-textgrey-dark rounded-lg cursor-pointer ' />
          }
          nextLabel={
            <MdKeyboardArrowRight className='text-4xl text-textgrey-dark rounded-lg cursor-pointer ' />
          }
          onPageChange={handlePageChange}
          pageCount={props.page}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          className='flex justify-end items-center  gap-2 child:child:p-2 child:m-1 child:child:rounded'
        />
      </div>
    </div>
  );
};

export default Pagination;
