import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { UserDetails } from '../types';

const useUserData = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, 'Users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data() as UserDetails);
        } else {
          console.log('User data does not exist in Firestore.');
        }
      } else {
        console.log('User not logged in.');
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return { userDetails };
};

export default useUserData;
