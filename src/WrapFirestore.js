import { connect } from "react-redux";
import { firebaseApp } from "./FirebaseConfig";
const db = firebaseApp.firestore();

export function getFireData() {
  //return "get fire data";
  const docData = [];
  let documentArray = [];
  const db = firebaseApp.firestore();
  db.collection("mariposaweb")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docData.push(doc.data());
        documentArray.push(...docData);
        docData.pop();
      });
      /*this.setState({
        loading: false,
        data: documentArray,
      });*/
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });

  return documentArray;
}
