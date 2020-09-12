import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import data from "../../data/data";
import Pagination from "./Pagination";

const Organizations = () => {
    const [posts] = useState(data.organisations.organisations);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber, event) => {
        setCurrentPage(pageNumber);
    };
    return (
        <Container className={'helpContainer'} id={'organization'}>
            <Row className={'helpRowTitle'}>
                <p>{data.organisations.title}</p>
            </Row>
            <Row className={'helpDetailsRow'}>
                {currentPosts.map((el) => {
                    return (
                        <Row key={el.id} className={'helpData'}>
                            <Col className={'helpDetails'} >
                                <h2>{el.name}</h2>
                                <p>{el.desc}</p>
                            </Col>
                            <Col className={'helpThings'} >
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
}

export default Organizations;