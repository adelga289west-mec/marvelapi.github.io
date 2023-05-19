const form = document.querySelector("form");
const input = document.querySelector("input");
const msg = document.querySelector(".msg");
const results = document.querySelector(".results .mcharacter");
const pic = document.getElementById("pic")
const cname = document.getElementById("cname")
const description = document.getElementById("description")
const box= document.getElementById("container")

const apiKey = "c67406f1bdcc49a345379001e5dae7f9";
/* const pKey="aadbe54e49860379999422ca7de952b7e44d9e8c"; */



form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;

  const hash = "e6dbaf8c730a6253137b7969ad62d66c";
  const url = `https://gateway.marvel.com:443/v1/public/characters?name=${inputVal}&ts=1&apikey=${apiKey}&hash=${hash}`;

  fetch(url)
    .then(response => response.json())
    .then(info => {
// making sure things show
      console.log(info)
      console.log(info.data.results[0].name)
      console.log(info.data.results[0].description)
      console.log(info.data.results[0].thumbnail.path+"."+info.data.results[0].thumbnail.extension)

   createCharater();
      function createCharater(){
        const cDiv = document.createElement("div")
        cDiv.setAttribute('id', 'cbox')
        const cname = document.createElement('h1')
        cname.setAttribute = ('id', 'cname')
        const cimage = document.createElement("div");
        cimage.setAttribute = ('id', 'pic')
        const cdescription = document.createElement("p");
        cdescription.setAttribute = ('id', 'desc')
        cname.innerHTML = info.data.results[0].name;
        cimage.style.backgroundImage = "url("+info.data.results[0].thumbnail.path+"."+info.data.results[0].thumbnail.extension + ")"
        cimage.style.width = "300px"
        cimage.style.height = "300px"
        cimage.style.backgroundPosition = "center"
        cimage.style.backgroundSize = "cover"
        cimage.style.backgroundRepeat = "no-repeat"
        cdescription.innerHTML = info.data.results[0].description; 
        cdescription.style.width = "300px"
        cDiv.append(cname, cimage, cdescription)
        box.appendChild(cDiv);
      
      
      }
    })
   
    .catch(error => {
      console.error(error);
      msg.textContent = "Please search for a Marvel Character";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});


