const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=> {
    e.preventDefault(); //preventing form from submitting
    statusTxt.style.color = "gray"
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest(); //creating new XML object
    xhr.open("POST", "pesan.php", true); //sending post request to pesan.php file

    xhr.onload = ()=> { //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){ //if ajax response is 200 & ready status is 4 means there is no error
            let response = xhr.response; //storing ajax response in a response variable

            //jika respon error seperti salah memasukkan email maka codingan akan mengubah status warna menjadi merah
            if(response.indexOf("Email dan pesan harus diisi") != -1 || response.indexOf("Masukkan email yang valid") || response.indexOf("Maaf, Pesanmu gagal dikirim")) {
                statusTxt.style.color = "red"
            } else {
                form.reset();
                setTimeout(()=> {
                    statusTxt.style.display = "none";
                },3000)
            } 
            statusTxt.innerHTML = response;
        }
    }
    let formData = new FormData(form); //creating new formData obj. this obj is used to send form data
    xhr.send(formData); //sending form data

}