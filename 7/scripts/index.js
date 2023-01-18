
let app = new Vue({
    el: "#vue",
    data: {
        items: data
    } 
});

// 
let items = document.querySelectorAll('.item');
let btn_rbs = document.querySelectorAll(".btn-rb");

for(let btn of btn_rbs)
{
    btn.addEventListener("click", function()
    {
        for(let item of items)
        {
            if(item.dataset.categories.indexOf(btn.dataset.categories)<0) 
            item.style.display = "none";
            else item.style.display = "block";
        }
    });
}
