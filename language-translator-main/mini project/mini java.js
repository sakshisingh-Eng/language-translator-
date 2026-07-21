const fromText = document.querySelector(".from-text");
// *********************************************************
const uploadImageIcon = document.getElementById('uploadImage');
const fileInput = document.getElementById('fileInput');
// *********************************************************
toText = document.querySelector(".to-text");
selectTag = document.querySelectorAll("select");
exchangeIcon = document.querySelector(".exchange");
(translateBtn = document.querySelector("button")),
  (icons = document.querySelectorAll(".row i"));


selectTag.forEach((tag, id) => {
  for (const country_code in countries) {
    // seleting English by default as from language and hindi to langauge
    let selected;
    if (id == 0 && country_code == "en-GB") {
      selected = "selected";
    } else if (id == 1 && country_code == "hi-IN") {
      selected = "selected";
    }
    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option); // adding option tag inside select tag
  }
});

exchangeIcon.addEventListener("click", () => {
  // exchange textarea and select tag values
  let tempText = fromText.value,
    tempLang = selectTag[0].value;
  fromText.value = toText.value;
  selectTag[0].value = selectTag[1].value;
  toText.value = tempText;
  selectTag[1].value = tempLang;
});

translateBtn.addEventListener("click", () => {
  let text = fromText.value,
    translateFrom = selectTag[0].value, //getting fromSelect tag value
    translateTo = selectTag[1].value; //getting toSelect tag value
  if (!text) return;
  toText.setAttribute("placeholder", "Translating...");
  let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}&de=samtailor06@gmail.com`;
  // let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
  //fetching api response and returning it with parsing into js obj
  //and in another then method receiving that obj
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      toText.value = data.responseData.translatedText; // once data fetched, changing textarea placeholder to traslation
      toText.setAttribute("placeholder", "Translating");
    });
});

// icons.forEach((icon) => {
//   icon.addEventListener("click", ({ target }) => {
//     if (target.classList.contains("fa-copy")) {
//       // clicked icon has from id, copy the fromtextarea value else copy the totextarea value
//       if (target.id == "from") {
//         navigator.clipboard.writeText(fromText.value);
//       } else {
//         navigator.clipboard.writeText(toText.value);
//             }
//     } else if (target.classList.contains("fa-microphone")) {
//       const microphoneIcon = document.getElementById("microphone");
//       const fromText = document.querySelector(".from-text");
//     microphoneIcon.addEventListener('click',function(){
//         var speech = true;
//         window.SpeechRecognition = window.webkitSpeechRecognition;
    
//         const recognition = new SpeechRecognition();
//         recognition.interimResults = true;
    
//         recognition.addEventListener('result', e => {
//             const transcript = Array.from(e.results)
//                 .map(result => result[0])
//                 .map(result => result.transcript)
//                 .join('')
    
//             // document.getElementById("convert_text").innerHTML = transcript;
//             console.log(transcript);
//         });
        
//         if (speech == true) {
//             recognition.start();
//         }
//     })



//       console.log("microphone icon clicked");
//     } else {
//       let utterance;
//       // if clicked icon has from id, speak the fromtextarea value eles speak the totextarea value
//       if (target.id == "from") {
//         utterance = new SpeechSynthesisUtterance(fromText.value);
//         utterance.lang = selectTag[0].value; // setting utterance language to fromselect tag value
//       } else {
//         utterance = new SpeechSynthesisUtterance(toText.value);
//         utterance.lang = selectTag[1].value; // setting utterance language to toselect tag value
//       }
//       speechSynthesis.speak(utterance); // speak the passed utterance
//     }
//   });
// });
// ****************************************
icons.forEach((icon) => {
  icon.addEventListener("click", ({ target }) => {
    if (target.classList.contains("fa-copy")) {
      // clicked icon has from id, copy the fromtextarea value else copy the totextarea value
      if (target.id == "from") {
        navigator.clipboard.writeText(fromText.value);
      } else {
        navigator.clipboard.writeText(toText.value);
      }
    } else if (target.classList.contains("fa-microphone")) {
      const microphoneIcon = document.getElementById("microphone");
      const fromText = document.querySelector(".from-text");
      microphoneIcon.addEventListener('click', function() {
        var speech = true;
        window.SpeechRecognition = window.webkitSpeechRecognition;

        const recognition = new SpeechRecognition();
        recognition.interimResults = true;

        recognition.addEventListener('result', e => {
          const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
          
          // Paste the transcript into the input box
          fromText.value = transcript;
        });

        if (speech == true) {
          recognition.start();
        }
      });
    } else {
      let utterance;
      // if clicked icon has from id, speak the fromtextarea value else speak the totextarea value
      if (target.id == "from") {
        utterance = new SpeechSynthesisUtterance(fromText.value);
        utterance.lang = selectTag[0].value; // setting utterance language to fromselect tag value
      } else {
        utterance = new SpeechSynthesisUtterance(toText.value);
        utterance.lang = selectTag[1].value; // setting utterance language to toselect tag value
      }
      speechSynthesis.speak(utterance); // speak the passed utterance
    }
  });
});

// ************************************************************************
// const fromText = document.querySelector(".from-text");
// const toText = document.querySelector(".to-text");
// const selectTag = document.querySelectorAll("select");
// const exchangeIcon = document.querySelector(".exchange");
// const translateBtn = document.querySelector("button");
// const uploadImageIcon = document.getElementById('uploadImage');
// const fileInput = document.getElementById('fileInput');
// const volumeIcons = document.querySelectorAll(".row.from .fa-solid.fa-volume-high");

// // Functionality for speaking the text
// function speakText(text, language) {
//   if (text) {
//     let utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = language;
//     speechSynthesis.speak(utterance);
//   }
// }

// // Populate language options in select tags
// selectTag.forEach((tag, id) => {
//   for (const country_code in countries) {
//     let selected;
//     if (id == 0 && country_code == "en-GB") {
//       selected = "selected";
//     } else if (id == 1 && country_code == "hi-IN") {
//       selected = "selected";
//     }
//     let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
//     tag.insertAdjacentHTML("beforeend", option);
//   }
// });

// // Exchange language functionality
// exchangeIcon.addEventListener("click", () => {
//   let tempText = fromText.value,
//       tempLang = selectTag[0].value;
//   fromText.value = toText.value;
//   selectTag[0].value = selectTag[1].value;
//   toText.value = tempText;
//   selectTag[1].value = tempLang;
// });

// // Translation functionality
// translateBtn.addEventListener("click", () => {
//   let text = fromText.value,
//       translateFrom = selectTag[0].value,
//       translateTo = selectTag[1].value;
//   if (!text) return;
//   toText.setAttribute("placeholder", "Translating...");
//   let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}&de=samtailor06@gmail.com`;
  
//   fetch(apiUrl)
//     .then((res) => res.json())
//     .then((data) => {
//       toText.value = data.responseData.translatedText;
//       toText.setAttribute("placeholder", "Translation");
//     });
// });

// // Event listeners for volume icons
// volumeIcons.forEach(icon => {
//   icon.addEventListener('click', () => {
//     const textToSpeak = fromText.value;
//     const selectedLanguage = selectTag[0].value;
//     speakText(textToSpeak, selectedLanguage);
//   });
// });

// Upload image functionality
uploadImageIcon.addEventListener('click', (event) => {
  event.stopPropagation();
  fileInput.click();
});

// File input change event for OCR
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    Tesseract.recognize(
      file,
      'eng',
      {
        logger: info => console.log(info)
      }
    ).then(({ data: { text } }) => {
      fromText.value = text;
      console.log('OCR Result:', text);
    }).catch(error => {
      console.error('OCR Error:', error);
    });
  }
});