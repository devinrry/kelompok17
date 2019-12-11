$(document).ready(function () {

	$.fn.compekFile = function () {
        this.html(`<img style="max-width:100px; cursor:pointer" src="../../assets/icon/man.png" alt="Profile" id="prev" class="pointer" 
            title="Ubah Foto Profil"/><input style="display:none" type="file" id="profilePic" name="profilePic" 
            class="hidden" accept="image/*">`);

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#prev').attr('src', e.target.result);
                    console.log(e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#profilePic").change(function () {
            readURL(this);
        });
    };

    $('.image').compekFile();

});