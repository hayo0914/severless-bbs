import firebase from 'firebase';

export const createBoard = ({ title, userName, comment }) => {
  const db = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  db.collection('boards')
    .add({
      title,
      userName,
      comment,
      createdAt: timestamp,
      updatedAt: timestamp,
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
};

export const fetchBoards = async lastVisible => {
  try {
    const db = firebase.firestore();
    const ref = db
      .collection('boards')
      .orderBy('updatedAt', 'desc')
      .limit(50);
    if (lastVisible) {
      ref.startAfter(lastVisible);
    }
    const querySnapshot = await ref.get();
    const results = [];
    querySnapshot.forEach(function(doc) {
      const d = doc.data();
      d.id = doc.id;
      results.push(d);
    });
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    return { results, lastVisible };
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
