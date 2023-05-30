import React, { useState } from "react";
import { firestore } from "../firebase";

const TimeIn = () => {
  const [fingerprintData, setFingerprintData] = useState(null);

  const scanFingerprint = () => {
    // Capture the fingerprint data and store it in a variable
    const capturedFingerprintData = "Fingerprint data";

    // Set the captured fingerprint data in the component state
    setFingerprintData(capturedFingerprintData);

    // Store the timestamp in Firestore
    const timestamp = new Date().toISOString();

    // Replace 'collectionName' with the actual collection name in your Firestore database
    firestore
      .collection("collectionName")
      .add({ timestamp })
      .then(() => {
        console.log("Timestamp stored successfully in Firestore");
      })
      .catch((error) => {
        console.error("Error storing timestamp in Firestore:", error);
      });
  };

  return (
    <div>
      <h2>Time In</h2>
      <button onClick={scanFingerprint}>Scan Fingerprint</button>
      {fingerprintData && (
        <div>
          <p>Fingerprint Data: {fingerprintData}</p>
        </div>
      )}
    </div>
  );
};

export default TimeIn;
