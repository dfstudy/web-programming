
//

new Vue({
    el: "#vue",
    data:{
        items: []
    },
    mounted(){
        axios.get('https://isidea.ru/rgups_data.json').then(response => this.items = response.data);
    }
})

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
