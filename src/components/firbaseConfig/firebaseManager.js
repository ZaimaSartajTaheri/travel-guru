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
          console.log(err);
      })
}
export const handleFbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    user.success = true;
    return user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    console.log(errorCode, errorMessage,email)
  });
}

export const handleGoogleSignOut=()=>{
    
        return firebase.auth().signOut()
        .then(()=> {
            
            
            const signedOutUser={
                isSignedIn:false,
                name:'',
                email:'',
                photo:'',
                error:'',
                success:false

            }
            return signedOutUser;
            

           
          }).catch(err=>{
              console.log(err);
          })
    
}
export const createWithEmailPassword=(name,email,password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(res=>{
                updateUserName(name);
                const newUserInfo = res.user;            
                newUserInfo.error ='';
                newUserInfo.success=true;
                return newUserInfo;
            

            }).catch(error=> {
                // Handle Errors here.
                let errorMessage = error.message;
                const newUserInfo = {};
                newUserInfo.error =errorMessage;
                newUserInfo.success =false;
                return newUserInfo;
                
               
                
                // ...
              });
}
export const signInWithEmailPassword=(email,password)=>{
    return firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res=>{
        
        const newUserInfo = res.user;
        newUserInfo.error ='';
        newUserInfo.success=true;
        return newUserInfo;

        }).catch(error=> {
        // Handle Errors here.
        let errorMessage = error.message;
        const newUserInfo = {};
        newUserInfo.error =errorMessage;
        newUserInfo.success =false;
        return newUserInfo;
        // ...
      });
}

const updateUserName = name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name updated successfully')
    }).catch(function(error) {
      console.log(error)
    });
  }