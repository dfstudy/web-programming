
let content = document.querySelector('.content');

// Рубрика

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

// Кнопка войти

let btn_log = document.querySelector('.log-btn');

let form_log = document.querySelector('.login-form');

let btn_cross = document.querySelector('.login-form-cross');


// function displayFormLogin(status) {
//     form_log.style.display = `${status}`;

//   }

btn_log.addEventListener("click", function() {
    form_log.style.display = "block";
    content.style.pointerEvents = "none";
  });

btn_cross.addEventListener("click", function() {
    form_log.style.display = "none";
    content.style.pointerEvents = "auto";
  });


// Передвижение формы

let dragable = form_log.querySelector('p');

dragable.addEventListener("mousedown", function(e) {
    let pos = form_log.getBoundingClientRect();
    let shiftX = e.pageX - pos.left;
    let shiftY = e.pageY - pos.top;

    document.onmousemove = function(e) {
        form_log.style.left = (e.pageX - shiftX) + "px";
        form_log.style.top = (e.pageY - shiftY) + "px";
    }

    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
});