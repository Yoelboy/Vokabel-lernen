
let dictionary= JSON.parse(localStorage.getItem('dictionary')) || {};
let randomGermanWord;
function addvokabel(){
    dictionary [ germenText.value] = englishText.value;
    germenText.value= '';
    englishText.value= '';

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    render();
} 
function render(){
    vokabelliste.innerHTML = '';
    for( let key in dictionary){
    vokabelliste.innerHTML += `<li>${key} - ${ dictionary[key]}</li>` ;
    
} }
function nextVocabulary() {
       let obj_keys = Object.keys(dictionary);
         randomGermanWord = obj_keys[Math.floor(Math.random() *obj_keys.length)];
        word.innerHTML = `${dictionary[randomGermanWord] }?`;
    }

function compare(){

if ( germenText.value == randomGermanWord)[
    
    
  text.innerHTML = 'Richtig!!' ,
   ]
   else{
    text.innerHTML = 'Falsch!!'

   }
  
   germenText.value  = '' ;
   nextVocabulary();
}
