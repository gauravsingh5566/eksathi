import React from 'react';
import { Document, Page } from 'pdfjs-dist/webpack';
// import pdfjs from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker'; // This imports the worker source

// pdfjs.GlobalWorkerOptions.workerSrc = 'node_modules/pdfjs-dist/build/pdf.worker.js';


const EksathiPdfViewer = () => {
  const pdfUrl = 'http://ignou.ac.in/userfiles/Common-Prospectus-English.pdf';

  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default EksathiPdfViewer;