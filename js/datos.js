const firebaseConfig = {
    apiKey: "AIzaSyCXq91RpUZZpuFXq-eonNyUaHhaPj9r7bI",
    authDomain: "demon-c8214.firebaseapp.com",
    projectId: "demon-c8214",
    storageBucket: "demon-c8214.appspot.com",
    messagingSenderId: "825121322437",
    appId: "1:825121322437:web:1a56ad8d1a0734e63887ac"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  let nombre = document.getElementById("name");
  let cel = document.getElementById("celphone");
  let save_btn = document.getElementById("save-btn");

  save_btn.addEventListener("click", ()=> {
    let data = {
      nombre: nombre.value,
      celular: cel.value,
    };
    save_data_firebase(data);
  });
const save_data_firebase = (d) =>{
  db.collection("contactos").add(d)
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
};

