document.getElementById("newArray").addEventListener("click", div_creator);

const array= [];

function div_creator(){
    array.length = 0;
    var get_bars= document.getElementById("bars");
    get_bars.innerHTML="";

    for(let i=0; i<100; i++){
      let bar_height= Math.floor(Math.random()*100);
      console.log(bar_height);
      var div= document.createElement('div');
      div.className= 'divElement';
      div.style.height= bar_height + '%';
      array.push(div);
      document.getElementById("bars").appendChild(div);
    }
}

// function update_array_size()
// {
//   div_creator();
// }

// window.onload= update_array_size();
