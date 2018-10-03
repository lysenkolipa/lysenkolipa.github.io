$('#submit_button').click(function() {
    $('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 4,
                maxlength:16
            },
            email: {
                required: true,
                email:true,
                minlength: 6,
                maxlength:40
            },
            portfolio: {
                required: true,
                url:true
            }
        },
        messages: {
            name: {
                required: 'This field is required!',
                minlength: 'Name must be at least 3 characters',
                maxlength: 'Name must be at most 16 characters'
            },
            email: {
                required: 'This field is required!',
                email: 'E-mail should contains chart "@"',
                minlength: 'Password must be at least 6 characters',
                maxlength: 'Password must be at most 16 characters'
            },
            portfolio: {
                required: 'This field is required!'
            }

        }
    });
});