
// Mengubah Tema
const tema = document.getElementById('tema');
tema.addEventListener('click', () => {document.body.classList.toggle('bd');});

// Mengubah warna About
function getNilai () {
	
	let nilai = Math.random();

	if ( nilai < 0.34 ){
		return 'merah';
	}else if ( nilai >= 0.34 && nilai < 0.68 ){
		return 'putih';
	}else{
		return 'hitam';
	}

}

const about = document.querySelector('.about');
about.addEventListener('click', function(){
	const nilai = getNilai();
	about.classList.toggle(nilai);
});