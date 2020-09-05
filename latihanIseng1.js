alert ("selamat datang, mari berkenalan dengan saia");
confirm ("sudah siap? klik ok jika siap")

var lagi = true;

while (lagi === true){
    var nama = prompt ("masukan nama anda : ");
    var hobi = prompt ("masukan hobi anda : ");

    alert ("Halo " + nama + " smoga kita jodoh yak" );
    alert ("Tuh kan hobi kita sama,iya.. sama sama suka " + hobi);

    lagi = confirm ("mau diulang lagi ga ?");
}
alert ("jangan baper yak ehe");

function myFunction(){
    document.getElementById("click").innerHTML = "selamat datang, mari berkenalan dengan saia";
}
