import React from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";

import "./styles.css";

import samplePDF from "../Sample-page.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 300;
const height = 450;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

function Test() {
  return (
    <Document file={samplePDF}>
      <HTMLFlipBook width={width} height={height}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
        <Page pageNumber={3} />
        <Page pageNumber={4} />
        <Page pageNumber={5} />
        <Page pageNumber={6} />
        <Page pageNumber={7} />
        <Page pageNumber={8} />
      </HTMLFlipBook>
    </Document>
  );
}

ReactDOM.render(<Test />, document.getElementById("app"));
