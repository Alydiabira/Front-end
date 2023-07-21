import React from "react";
// import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "../styles.css";
import samplePDF from "./Sample-page.pdf";
import { createRoot } from 'react-dom/client';
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
// Comment mettre à niveau vers React 18
//https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
//React 18 introduit une nouvelle API racine qui offre une meilleure ergonomie pour la gestion des racines. La nouvelle API racine active également le nouveau moteur de rendu simultané, ce qui vous permet d'activer des fonctionnalités simultanées.
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Test tab="home" />);
// ReactDOM.createRoot(<Test />, document.getElementById("app"));
export default Test
//Résolu - createRoot() Le conteneur cible n'est pas un élément DOM
// https://www.sharooq.com/solved-createroot-target-container-is-not-a-dom-element
// Cette erreur se produit généralement en raison de la transmission du mauvais "id" à la méthode "document.getElelementById()" ou de l'appel du script React avant la balise div avec "id" dans le fichier "index.html".