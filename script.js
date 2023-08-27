function toggleMode() {
  const html = document.documentElement // document: é a representação do documento HTML em formato de objeto javascript, que acessa propriedades (atributos) e funcionalidades (métodos).

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // o codigo de lógica acima pode ser substituído pela função toggle:

  html.classList.toggle("light")
}
