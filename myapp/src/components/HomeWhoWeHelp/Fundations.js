import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import data from "../../data/data";
import Pagination from "./Pagination";

const Fundations = () => {
    const [posts] = useState(data.foundations.organisations);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber, event) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Container className={'helpContainer'}>
            <Row>
                <p>{data.foundations.title}</p>
            </Row>
            <Row className={'HelpDetailsRow'}>
                {currentPosts.map((el) => {
                    return (
                        <Row key={el.id}>
                            <Col className={'HelpDetails'}>
                                <h2>{el.name}</h2>
                                <p>{el.desc}</p>
                            </Col>
                            <Col className={'HelpThings'}>
                                <p>{el.needs}</p>
                            </Col>
                        </Row>
                    );
                })}
            </Row>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </Container>
    )
};

export default Fundations;

