import firebase from 'firebase';

const helper = {
  fetch: async ref => {
    const querySnapshot = await ref.get();
    const data = [];
    querySnapshot.forEach(function(doc) {
      const d = doc.data();
      d.id = doc.id;
      data.push(d);
    });
    let lastVisible = null;
    if (querySnapshot.docs.length > 0) {
      lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    }
    return { data, lastVisible };
  },
};

export const Boards = {
  getData: async lastVisible => {
    const db = firebase.firestore();
    const ref = db
      .collection('boards')
      .orderBy('updatedAt', 'desc')
      .limit(50);
    if (lastVisible) {
      ref.startAfter(lastVisible);
    }
    return helper.fetch(ref);
  },
  createBoard: async ({ title, userName, comment }) => {
    const db = firebase.firestore();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const docRef = await db.collection('boards').add({
      title,
      userName,
      comment,
      createdAt: timestamp,
      updatedAt: timestamp,
    });
    return docRef;
  },
};
