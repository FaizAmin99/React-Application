import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import React, { useEffect, useState } from "react";

const TimeIn = () => {
  const [fingerprintData, setFingerprintData] = useState(null);

  const scanFingerprint = () => {
    // Capture the fingerprint data and store it in a variable
    const capturedFingerprintData = "Fingerprint data";

    // Set the captured fingerprint data in the component state
    setFingerprintData(capturedFingerprintData);

    // Store the timestamp in Firestore
    const timestamp = new Date().toISOString();

    // Replace `collectionName` with the actual collection name in your Firestore database
    const collectionName = "Dymaxuser"; //Name of user
    const userId = "kqZ1ghTXKjA0Bb2334x8"; //Dymaxuser's document ID
    
    firebase
      .firestore()
      .collection(collectionName)
      .doc(userId)
      .collection("timestamps")
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
      <button onClick={scanFingerprint}>Punch TimeIn</button>
      {fingerprintData && (
        <div>
          <p>Fingerprint Data: {fingerprintData}</p>
        </div>
      )}
    </div>
  );
};

export default TimeIn;
