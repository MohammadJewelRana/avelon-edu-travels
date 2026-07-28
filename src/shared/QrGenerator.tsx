import QRCode from "react-qr-code";

export default function QrGenerator() {

  const url =
    "http://localhost:3001//files/cv.pdf";

//   const url =
//     "https://avelon-edu.vercel.app/files/trade-license.pdf";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <QRCode value={url} size={250} />
    </div>
  );
}