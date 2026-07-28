 import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import {
  FaFilePdf,
  FaCopy,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner,
} from "react-icons/fa";

export default function QrGenerator() {
  const url = "http://localhost:3001/TradeLicense/rpt_TradeLicense_print_ver2.aspx/id=9220d917-d489-4de7-a1e1-/2c2fca603ca9&printtype=NEW&transactionno=/410094637.pdf";
  
  // const url = "http://localhost:3001/files/cv.pdf";
  // const url = "https://avelon-edu-travels.vercel.app/TradeLicense/rpt_TradeLicense_print_ver2.aspx/id=9220d917-d489-4de7-a1e1-/2c2fca603ca9&printtype=NEW&transactionno=/410094637.pdf";

  // const url = "https://avelon-edu-travels.vercel.app/files/cv.pdf";

 

  const [loading, setLoading] = useState(true);
  const [fileExists, setFileExists] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkFile = async () => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        setFileExists(res.ok);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setFileExists(false);
      } finally {
        setLoading(false);
      }
    };

    checkFile();
  }, [url]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Failed to copy link");
    }
  };

  // Loading UI
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-5xl text-red-600 mx-auto" />
          <p className="mt-4 text-gray-600 font-medium">
            Checking document...
          </p>
        </div>
      </div>
    );
  }

  // File Not Found UI
  if (!fileExists) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">

          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <FaExclamationTriangle className="text-red-600 text-5xl" />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mt-6">
            File Not Found
          </h2>

          <p className="text-gray-500 mt-3 leading-7">
            Sorry! The requested PDF or image does not exist or has been removed.
          </p>

          <button
            onClick={() => window.history.back()}
            className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Success UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 flex items-center justify-center px-4 py-10">

      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-7 text-white">

          <div className="flex items-center gap-4">

            <div className="bg-white/20 p-4 rounded-xl">
              <FaFilePdf className="text-3xl" />
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                QR Document
              </h1>

              <p className="text-red-100 mt-1">
                Scan this QR to open the document
              </p>
            </div>

          </div>

        </div>

        {/* Body */}
        <div className="p-8">

          <div className="flex justify-center">

            <div className="bg-white border rounded-2xl shadow-lg p-5">
              <QRCode value={url} size={220} />
            </div>

          </div>

          <div className="flex justify-center items-center gap-2 text-green-600 mt-6">

            <FaCheckCircle />

            <span className="font-semibold">
              Document Available
            </span>

          </div>

          <div className="mt-6 bg-gray-100 rounded-xl p-4 break-all text-sm text-gray-700">

            {url}

          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <button
              onClick={copyLink}
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white rounded-xl py-3 font-semibold transition"
            >
              <FaCopy />

              {copied ? "Copied!" : "Copy Link"}
            </button>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 font-semibold transition"
            >
              <FaExternalLinkAlt />

              Open File
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}