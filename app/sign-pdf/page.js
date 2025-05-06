"use client"
import React, { useRef, useState } from 'react';
import { pdfjs } from 'react-pdf';
import SignatureCanvas from 'react-signature-canvas';
import jsPDF from 'jspdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const SignPDF = () => {
  const [file, setFile] = useState(null);
  const canvasRef = useRef(null);
  const signatureRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    }
  };

  const handleRenderPDF = async () => {
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = async () => {
      const typedarray = new Uint8Array(fileReader.result);
      const pdf = await pdfjs.getDocument(typedarray).promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 2 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    };
    fileReader.readAsArrayBuffer(file);
  };

  const handleDownload = () => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvasRef.current.width, canvasRef.current.height],
    });

    const canvas = canvasRef.current;
    const pdfImage = canvas.toDataURL('image/jpeg', 1.0);

    // Add rendered PDF page as background
    pdf.addImage(pdfImage, 'JPEG', 0, 0, canvas.width, canvas.height);

    // Add the signature image
    const signatureDataURL = signatureRef.current
      .getTrimmedCanvas()
      .toDataURL('image/png');

    // Adjust signature position as needed (e.g., bottom-right corner)
    const signatureX = 100;
    const signatureY = canvas.height - 100;
    const signatureWidth = 150;
    const signatureHeight = 50;

    pdf.addImage(signatureDataURL, 'PNG', signatureX, signatureY, signatureWidth, signatureHeight);

    pdf.save('signed.pdf');
  };

  return (
    <div>
      <h2>Sign PDF</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleRenderPDF}>Render PDF</button>

      <div>
        <canvas ref={canvasRef} style={{ border: '1px solid black' }} />
        <SignatureCanvas
          ref={signatureRef}
          penColor="black"
          canvasProps={{
            width: 300,
            height: 100,
            className: 'signature-canvas',
            style: { border: '1px solid #000', marginTop: '10px' },
          }}
        />
        <button onClick={() => signatureRef.current.clear()}>Clear Signature</button>
        <button onClick={handleDownload}>Download Signed PDF</button>
      </div>
    </div>
  );
};

export default SignPDF;
