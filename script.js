function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* if (html.classList.contains("light")) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */
 

//pegar a tag img
const img = document.querySelector("#avatar img")
//substituir a img
if (html.classList.contains("light")) {
  //se tiver no light mode trocar a img
  img.setAttribute("src", "./assets/dazaiwhite.png")
} else {
  //se tiver no modo dark outra imagem
  img.setAttribute("src", "./assets/avatar.png")
}





}
