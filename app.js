const ul = document.querySelector("ul")
const arr = ["i","we","you","they","he,","she","it"]
function view() {
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    ul.innerHTML+=`<li>${arr[i]}</li>`
}    

}