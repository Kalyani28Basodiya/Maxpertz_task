import React from 'react'
import styled from 'styled-components';

const Page = ({ totalPosts, postPerPage, currentPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalPosts / postPerPage);

    const goToPrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }} className='page'>
            <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                style={{ marginRight: '10px' }}
            >
                Previous
            </button>

            <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};



export default Page;