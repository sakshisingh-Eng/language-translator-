// const fromText = document.querySelector(".from-text"); 
// const uploadImageIcon = document.getElementById('uploadImage');
// const fileInput = document.getElementById('fileInput');
// const microphoneIcon = document.getElementById("microphone");

// uploadImageIcon.addEventListener('click', () => {
//   fileInput.click(); // Trigger file input
// });

// fileInput.addEventListener('change', (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     Tesseract.recognize(
//       file,
//       'eng', // Change to the required language if necessary
//       {
//         logger: info => console.log(info) // Optional: Log progress
//       }
//     ).then(({ data: { text } }) => {
//       fromText.value = text; // Populate the text area with recognized text
//     }).catch(error => {
//       console.error(error);
//     });
//   }
// });
// *************************************************************
// const fromText = document.querySelector(".from-text"); 
// const uploadImageIcon = document.getElementById('uploadImage');
// const fileInput = document.getElementById('fileInput');
// const volumeIcons = document.querySelectorAll(".row.from .fa-solid.fa-volume-high"); // Assuming both volume icons have this class

// // Functionality for speaking the text
// function speakText(text, language) {
//   if (text) {
//     let utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = language; // Set the language based on your select tag value
//     speechSynthesis.speak(utterance);
//   }
// }

// // Add event listeners for volume icons
// volumeIcons.forEach(icon => {
//   icon.addEventListener('click', () => {
//     const textToSpeak = fromText.value; // Get text from the textarea
//     const selectedLanguage = selectTag[0].value; // Assuming first select tag is for from language
//     speakText(textToSpeak, selectedLanguage); // Call speak function
//   });
// });

// // Functionality for uploading an image
// uploadImageIcon.addEventListener('click', (event) => {
//   event.stopPropagation(); // Prevent event bubbling
//   fileInput.click(); // Trigger file input when the icon is clicked
// });

// fileInput.addEventListener('change', (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     Tesseract.recognize(
//       file,
//       'eng', // Change to the required language if necessary
//       {
//         logger: info => console.log(info) // Optional: Log progress
//       }
//     ).then(({ data: { text } }) => {
//       fromText.value = text; // Populate the text area with recognized text
//     }).catch(error => {
//       console.error(error);
//     });
//   }
// });

// // If you have other buttons in that div that also trigger speech,
// // ensure you add specific conditions for them to prevent conflicts.