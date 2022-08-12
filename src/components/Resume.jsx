/* eslint-disable */

import React, { useEffect, useState } from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/resume.css';

function Resume(props) {
  const { header } = props;
  const [data, setData] = useState(null);
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPage);
    setPageNumber(1);
  }

  useEffect(() => {
    fetch(endpoints.resume, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div>
            <Container id="ResumeContainer">
              <Document className={"PDFDocument"} file={data.url} onLoadSuccess={onDocumentLoadSuccess}>
                <Page className={"PDFPage PDFPageOne"} pageNumber={pageNumber} />
              </Document>
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

Resume.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Resume;
