$(document).ready(function() {

    $('#someForm').on('submit', function(e) {
        e.preventDefault();

        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var comments = $('#comments').val();

        //pretend we don't need validation

        //send to formspree
        $.ajax({
            url:'https://formspree.io/erkanceylan4@gmail.com',
            method:'POST',
            data:{
                name:name,
                 email:email,
                comments:comments,
                _subject:'Form Mesajı',
            },
            dataType:"json",
            success:function() {
                console.log('success');
                $('#formBlock').hide();
                $('#thankyouBlock').show();
            }

        });

    });

});
