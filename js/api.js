

function api(){
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    .then(response=> response.json())
    .then(data=> {
        const list  = document.querySelector('#fill_list');
      data.slice(0, 12).map((item)=>{
            const li = document.createElement('li');
            li.setAttribute('id', item.id);
            li.innerHTML  +=`
            <div class="box">
                <img src="`+item.image_link+`"/>
               <p>`+item.name+`</p> 
               <p>`+item.brand+`</p>
                <p>`+item.id+`</p> 
            </div> `;
            list.appendChild(li);
        })
    })
}
api();


