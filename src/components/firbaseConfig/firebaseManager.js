import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
export const initializeFirebaseFramework=()=>{
    firebase.initializeApp(firebaseConfig);
}
export const handleGoogleSignIn=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res=> {
        
        const {displayName,email,photoURl}=res.user;
        const signedInUser={
            isSignedIn:true,
            name:displayName,
            email:email,
            photo:photoURl,
            error:'',
            success:true
        }
        return signedInUser;
        }).catch(err=>{
          let errorMessage = err.message;
          const signedInUser = {};
          signedInUser.error =errorMessage;
          signedInUser.success =false;
          return signedInUser;
      })
}
export const handleFbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(fbProvider).then(res=> {
        
    const {displayName,email,photoURl}=res.user;
    const signedInUser={
        isSignedIn:true,
        name:displayName,
        email:email,
        photo:photoURl,
        error:'',
        success:true
    }
    return signedInUser;
    }).catch(err=> {
      let errorMessage = err.message;
      const signedInUser = {};
      signedInUser.error =errorMessage;
      signedInUser.success =false;
      return signedInUser;
  });
}

export const createWithEmailPassword=(name,email,password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(res=>{
                updateUserName(name);
                const newUserInfo = res.user; 
                newUserInfo.isSignedIn=false;
                newUserInfo.error ='';
                newUserInfo.success=true;
                //console.log(newUserInfo); 
                return newUserInfo;
            }).catch(error=> {
                let errorMessage = error.message;
                //console.log(errorMessage);
                const newUserInfo = {};
                newUserInfo.error =errorMessage;
                newUserInfo.success =false;
                return newUserInfo;
              });
}
export const signInWithEmailPassword=(email,password)=>{
    return firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res=>{
      // var user = firebase.auth().currentUser;
      // if (user != null) {
      //   user.providerData.forEach(function (res) {
         
      //     console.log("  Provider-specific UID: " + res.uid);
      //     console.log("  Name: " + res.displayName);
         
      //   });
      // }
        const newUserInfo = res.user;
        newUserInfo.isSignedIn=true;
        newUserInfo.error ='';
        newUserInfo.success=true;
        return newUserInfo;

        }).catch(error=> {
          
        let errorMessage = error.message;
        const newUserInfo = {};
        newUserInfo.error =errorMessage;
        newUserInfo.success =false;
        return newUserInfo;
      });
}

const updateUserName = name =>{
    const user = firebase.auth().currentUser;
    
    user.updateProfile({
      displayName: name
    }).then(function() {
    }).catch(function(error) {
      
    });
  }