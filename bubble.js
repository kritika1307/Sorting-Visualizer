document.getElementById("bubbleSort").addEventListener("click", bubble_sort);

function swap(el1, el2)
{
    const style1= window.getComputedStyle(el1);
    const style2= window.getComputedStyle(el2);

    const transform1= style1.getPropertyValue("height");
    const transform2= style2.getPropertyValue("height");

    el1.style.height= transform2;
    el2.style.height= transform1;

}

async function bubble_sort(delay=1000) 
{
    var divElement= document.getElementsByClassName("divElement");
    console.log(divElement);

    for(var i=0; i<divElement.length-1; i++)
    {
        for(var j=0; j< divElement.length-i-1; j++)
        {
            const el1= divElement[j];
            const style1= getComputedStyle(el1);
            const height1= style1.getPropertyValue("height");
            el1.style.background= "red";

            const el2= divElement[j+1];
            const style2= getComputedStyle(el2);
            const height2= style2.getPropertyValue("height");
            el2.style.background="red";

            // to wait for .1sec
            await new Promise((resolve) => 
                    setTimeout(()=> {
                        resolve();
                    }, delay)
                );

            if(parseInt(height1) > parseInt(height2))
            {
              await swap(el1, el2);
            }

            el1.style.background= "yellow";
            el2.style.background= "yellow";
        }
        divElement[divElement.length-i-1].style.background= "green";
    }
    divElement[0].style.background= "green";
}

