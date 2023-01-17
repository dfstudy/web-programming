let inptAddImg = document.querySelector('#add_image')
  .addEventListener('change', () => {

    let preview = document.querySelector('#image');
    let file = document.querySelector('#add_image').files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }

});