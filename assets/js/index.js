$(document).ready(function () {
    $('#Edecoded').on('keyup keydown change', function () {
        $('#Eencoded').val('');

        let value = $(this).val();

        let encoded = '';

        for (let index = 0; index < value.length; index++) {
            encoded += 'X';

            for (let count = 1; count < value.charCodeAt(index); count++) {
                encoded += 'D';
            }
        }

        $('#Eencoded').val(encoded);
    });

    $('#Dencoded').on('keyup keydown change', function () {
        $('#Ddecoded').val('');

        let value = $(this).val().toUpperCase();

        if (value.includes('D') && value.includes('X')) {
            let accumulator = 1;

            let decoded = '';

            for (let index = 1; index < value.length; index++) {
                if (value.charAt(index) == 'X' || index == value.length - 1) {
                    if (index == value.length - 1) {
                        accumulator++;
                    }

                    decoded += String.fromCharCode(accumulator);

                    accumulator = 1;
                } else {
                    accumulator++;
                }
            }

            $('#Ddecoded').val(decoded);
        } else {
            $('#Ddecoded').val('Please provide a valid input.');
        }
    });
});