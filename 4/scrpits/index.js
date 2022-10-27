let items = document.querySelectorAll('.item');

let btn_rb = document.querySelectorAll('.btn-rb');


for(let btn of btn_rb)
{
    btn.addEventListener("click", function()
    {
        for(let item of items)
        {
            
            if(item.dataset.rb.indexOf(btn.dataset.r)<0)
            {
                
                item.style.display = "none";
            }
            else
            {
                item.style.display = "block";
            }
        }
    });
}