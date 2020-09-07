import React from 'react';
import {Row} from "react-bootstrap";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <Row
                        className='page-link'
                        key={number}
                        // active={number === currentPage}
                        onClick={() => paginate(number)}>
                        {number}
                    </Row>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;