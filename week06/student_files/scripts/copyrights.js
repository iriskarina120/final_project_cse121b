let lastModif= new Date(document.lastModified);
console.log(lastModif)
document.querySelector('#modified').textContent = lastModif
var date = new Date();
var anio= date.getFullYear();
document.querySelector('#year').textContent = anio