// Fungsi Show  Div
function showDiv() {
  Content.style  = "opacity:1;margin-top:15vh;"; ket.style = "margin-top:30px";
}
// Fungsi Untuk Memulai
function memulai() {
  suratin.style = "transition:all 1s ease;transform:scale(.1);opacity:0"; ket.style = "transition:all 1s ease;transform:scale(.1);opacity:0"; setTimeout(pesan, 300)
}
// Fungsi Apa Gatau
function kpemb() {
  suratin.style = "display:none"; ket.style = "display:none"; fotoakhir.style = "display:inline-flex;transform:scale(1);"; Content.style = "opacity:1;margin-top:2vh;"; bq.style = "opacity:1;visibility:visible;margin-top:5px"; setTimeout(ngetik, 500)
}
// Fungsi Tombol
function tombol() {
  Tombol.style = "margin-top:15px;opacity:1;transform: scale(1);";
  ftom = 1;
} ftom = 0;
// Fungsi Akhiran
function fakhiran() {
  document.getElementById("akhiran").style = "display:inline-flex";
}

const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: '#FF0040',
  imageWidth: 100,
  imageHeight: 100,
});

const swalst = Swal.mixin({
  allowOutsideClick: false,
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  imageWidth: 100,
  imageHeight: 100,
});
// Setel Lagu
function setel() {
  audio.play();
}
function setel2() {
  bgm.play();
}
function jawab() {
  if(ftom === 1) {
    Tombol.style = "display:none"; pesane();
  }
}
// Fungsi Pesan Ke Wa
function feri() {
  window.location = "https://wa.me/6283894872372?text=" + pesanFeri;
}
var aa = 0, katangetik;
function ngetik() {
  if (aa < katangetik.length) {
    kalimat.innerHTML += katangetik.charAt(aa); aa++; setTimeout(ngetik, 80);
  } if (aa == katangetik.length) {
    kalimatc.style = "margin-top:30px;margin-bottom:10px"; setTimeout(ngetik2, 500)}
}
var ai = 0, katangetik2;
function ngetik2() {
  if (ai < katangetik2.length) {
    kalimatc.innerHTML += katangetik2.charAt(ai); ai++; setTimeout(ngetik2, 150);
  } if (ai == katangetik2.length) {
    setTimeout(tombol, 300)
  }
}

// Sudah Bermain Dengan Methode Asyncrhonous
async function pesane() {
  await swals.fire({
    title: 'Ke WhatsApp Yah..',
    imageUrl: 'https://media.tenor.com/wkzCX9s5kxQAAAAi/0906-peacegoma.gif'
  }); window.location = "https://wa.me/6283894872372?text=" + pesanwhatsapp;
}

async function pertama() {
  audio = new Audio('/assets/mamah.mp3'); setTimeout(showDiv, 100);
}; pertama();
// Fungsi Pop Up Sweet Alert nyaasync
async function pesan() {
  audio.play();
  await swalst.fire({
    title: 'haii cantikkk♥️♥️♥️',
    imageUrl: 'https://media.tenor.com/tHcCqMcKTp8AAAAj/tkthao219-bubududu.gif',
  });

  await swalst.fire({
  title: 'aku mau ngomong nih🙃',
  imageUrl: 'https://media.tenor.com/d0nIEAvNYksAAAAi/tkthao219-bubududu.gif',
  });

  await swalst.fire({
  title: 'semangat jalani hari-harinya yaa🙃',
  imageUrl: 'https://media.tenor.com/4eqa9mrhlA0AAAAj/mimibubu.gif'
  });

  await swalst.fire({
  title: 'jaga kesehatanmu! ',
  imageUrl: 'https://media.tenor.com/vLl9c3Aq7B4AAAAi/pandas-panda.gif',
  });

  await swalst.fire({
  title: 'jangan sampe sakit!',
  imageUrl: 'https://media.tenor.com/6W3uiyAxkXUAAAAi/tkthao219-bubududu.gif',
  });
  
  await swalst.fire({
  title: 'okeee...?',
  imageUrl: 'https://media.tenor.com/4D9h_vwCp-EAAAAi/tkthao219-bubududu.gif'
})
katangetik = "makasih yaaa udah mau bukain";
katangetik2 = "love you ♥️♥️♥️";
pesanwhatsapp = "makasihhhh mass wahyu";
pesanFeri = "Makasih wahyu"
setTimeout(kpemb, 300);
}
