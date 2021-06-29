import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { projectStorage, timestamp, database } from '../firebase/firebase';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const { currentUser } = useAuth();


  

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    // const collectionRef = projectFirestore.collection('images');
    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await database.photos.add({
        userId: currentUser.uid,
        url: url,
        createdAt: createdAt
      })
      // await collectionRef.add({ url, createdAt });
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;