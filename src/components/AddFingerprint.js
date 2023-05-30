//Using fingerprintjs Library


import React, { useState } from "react";

const FingerprintScanner = () => {
  const [fingerprintData, setFingerprintData] = useState(null);

  const scanFingerprint = () => {
     //Storing fingerprint data in a variable
    const capturedFingerprintData = "Fingerprint data";

    // Set the captured fingerprint data in the component state
    setFingerprintData(capturedFingerprintData);

    //API request to the backend server

    // Sending fingerprint data to the server (**apiEndpoint is a DUMMY)
    fetch("apiEndpoint", {
      method: "POST",
      body: JSON.stringify({ fingerprintData: capturedFingerprintData }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Fingerprint data stored successfully");
        } else {
          console.log("Failed to store fingerprint data");
        }
      })
      .catch((error) => {
        console.error("Error storing fingerprint data:", error);
      });
  };

  return (
    <div>
      <h2>Fingerprint Scanner</h2>
      <button onClick={scanFingerprint}>Scan Fingerprint</button>
      {fingerprintData && (
        <div>
          <p>Fingerprint Data Captured: {fingerprintData}</p>
        </div>
      )}
    </div>
  );
};

export default FingerprintScanner;
