$(document).ready(function () {

	$.fn.imagefile = function () {
		this.html(`<img src="../../assets/icon/man.png" id="profile-icon" class="pointer" title="Ubah Foto Profil"/>
			<input type="file" id="profile-picture" name="profilePic" class="hidden" accept="image/*">`);

		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();

				reader.onload = function (e) {
					$('#profile-icon').attr('src', e.target.result);
					console.log(e.target.result);
				};

				reader.readAsDataURL(input.files[0]);
			}
		}

		$("#profile-picture").change(function () {
			readURL(this);
		});
	};

	$('.profile').imagefile();

	$.fn.validate = function () {
        this.submit(function (ev) {
            ev.stopPropagation();
            retun = true;
            $("form#form :input").each(function () {
                name = $(this).attr('name');
                if (name === 'alamat') {
                    value = $(this).html();
                } else {
                    value = $(this).val();
                }
                console.log(name, value);
                regex = '';
                kosong = $.isEmptyObject(value) && name !== 'profilePic';
                if (name === 'nama') {
                    regex = /^[a-zA-Z]+( *[a-zA-Z']+)*$/;
                    pesan = "Hanya Boleh Memasukkan Format Nama";
                } else

                if (name === 'nis') {
                    regex = /^[0-9]{8}$/;
                    pesan = "Hanya Boleh Memasukkan Format Angka 8 Digit";
                } else

                if (name === 'alamat') {
                    regex = /^([j][l][.][ ])([a-z0-9 .])+((([ ][n][o][.][ ])|([\/]))[0-9]+[a-z]*)$/i;
                    pesan = "Masukan Alamat yang Benar";
                } else

                if (name === 'email') {
                    regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                    pesan = "Masukan Format Alamat E-mail yang Benar";
                } else

                if (name === 'gender') {
                    regex = /((Laki-laki)|(Perempuan))$/;
                    pesan = "Masukan Jenis Kelamin";
                } else

                if (name === 'password') {
                    regex = /([\s\S]{8,})$/;
                    pesan = "Password Minimal 8 Digit";
                } else

                if (name === 'profilePic') {
                    regex = /([\s\S])+((.jpg)|(.jpeg)|(.tiff)|(.gif)|(.png)|(.bmp))$/i;
                    pesan = "File Harus Gambar";
                } else

                if (kosong) {
                    pesan = "Tidak Boleh Kosong";
                }

                if (!value.match(regex) || kosong) {
                    console.log(pesan);
                    $(this).addClass('error');
                    retun = false;
                    return false;
                } else {
                    $(this).removeClass('error');
                }
            });
            console.log(retun);
            if (retun) {
                return true;
            } else {
            return false;
            }
        });
    };

    $('#form').validate();

});