


var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = "El innerHTML <em> del </em>sexto elemento es " + myNodelist[5].innerHTML;

//aplicando un estilo azul directamente *** no se recomienda
document.getElementById("demo").style.color="blue";
document.getElementById("demo").style.border= "2px solid black";

let myNodelist = document.querySelectorAll("p");
let text="";

//document.getElementById("demo").innerHTML = "El innerHTML <em> del //</em>sexto elemento es " + myNodelist[5].innerHTML;
 
//del array para cada elemento {}
//array.forEach(elemento => {  elemento    })
myNodelist.forEach(node => 
    {
        text+=node.innerHTML + "<br>";
    })
     
    document.getElementById("demo").innerHTML +=text;

    var x = document.getElementById("main");
var y = x.getElementsByTagName("p");

document.getElementById("btnPosts").addEventListener("click", () => {
    let opcion = document.getElementById("lstCom").value;
    fetch("http://localhost:1339/api/clientes" + opcion)
      .then((response) => response.json())
      .then((json) => {
        let posts = "";
        json.forEach((post) => {
          posts += `
          <div>
            <h2>${post.id}<button>+<button></h2>
            <p>${post.nombre}</p>
          </div>
        `;
        });
        document.getElementById("posts").innerHTML = posts;
      });
  });




  document.getElementById("btnRestore").addEventListener("click",()=>{
    let bd=mysql.query('select * from comics');
    let texto = "";
    var i =0;
    var j = 0;
    bd.comics.forEach(element => {
        texto+=`<div class="card">
        <p> Nombre: ${element.id} Telefono: ${element.nombre}</p>
        `
        i++;
        j++;
    });
    document.getElementById('detalles').innerHTML=texto;
});


