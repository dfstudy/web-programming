let XMLHR = new XMLHttpRequest();


let input = document.querySelector('#add-image');
let div = document.querySelector('#progressbar-area');

let progressbar = document.querySelector('#progressbar');


let size = document.querySelector('#size');

let label = document.querySelector('#add-text');

let add_svg = document.querySelector('#add-svg');
let image = document.querySelector('#image');

function textSize(bytes, sz = false, f = 1) {
    const ext = sz ? 1000 : 1024;

    if (Math.abs(bytes) < ext) {
        return bytes + ' B';
    }

    const um = sz
        ? [
        'kB',
        'MB',
        'GB',
        'TB',
        'PB',
        'EB',
        'ZB',
        'YB'
      ]
        : [
        'KiB',
        'MiB',
        'GiB',
        'TiB',
        'PiB',
        'EiB',
        'ZiB',
        'YiB'
      ];
    let k = -1;
    const r = 10 ** f;

    do {
        bytes /= ext;
        ++k;
    } while (Math.round(Math.abs(bytes) * r) / r >= ext && u < um.length - 1);

    return bytes.toFixed(f) + ' ' + um[k];
}

input.onchange = e => {
    div.className = 'progressbar-area'

    const [file] = input.files

    if (file) {
        image.className = 'img';
        image.src = URL.createObjectURL(file);

        XMLHR.open("POST", "https://isidea.ru/rgups_file.php", true);
        XMLHR.upload.onprogress = function (progress) {
            progressbar.value = progress.loaded;
        }

        progressbar.setAttribute("max", file.size);

        size.textContent = 
        "[" + Math.round(file.size / 1024) 
        + textSize(file.size) + "]";

        XMLHR.send(file);

        progressbar.className = 'hide';
        add_svg.setAttribute('fill', '#05fa1e');
        label.className = 'add-image-successed';
    }
}