
var itens =[
    {
    id:0,
    titulo:"Elder Ring",
    url:"https://apod.nasa.gov/apod/image/2201/CometLeonard_Estes_960.jpg",                          
    copyright: "Blake Estesitelescope.net",
    date: "2022-01-12",
 },
     {
    id:2,
    titulo:" Ring",
    img:"",                          
     },
     
 ] 

 start =() =>{
     var containerProdutos = document.getElementById("card1");
     itens.map((val)=>{
         containerProdutos.innerHTML+=`
         <div class="box">
             <img src="`+val.url+`"/>
             <p>`+val.titulo+`</p>
             <p>`+val.date+`</p>
             <p>`+val.copyright+`</p>
            
         </div> `;
     })
 }
 start();
