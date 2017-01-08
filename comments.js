$(document).ready(function () {

    var comName = document.getElementById('name');
    var comComment = document.getElementById('comment');
    var comPosted = document.getElementById('posted');
    var comTestOne = document.getElementById('nameTest');
    var comTestTwo = document.getElementById('commentTest');
    var comThanks = document.getElementById('thanks');

    $(comTestOne).hide();
    $(comTestTwo).hide();
    $(comThanks).hide();

    $('#sub').on('click', function () {
        if (comName.value === '') {
            $(comTestOne).show();
            $(comTestOne).addClass('invalid');
        } else {
            $(comTestOne).hide();
            $(comTestOne).removeClass('invalid');
        }

        if (comComment.value === '') {
            $(comTestTwo).show();
            $(comTestTwo).addClass('invalid');
        } else {
            $(comTestTwo).hide();
            $(comTestTwo).removeClass('invalid');
        }
        
        if (comName.value === '' || comComment.value === '') {
            $(comThanks).hide();
        } else {
            $(comThanks).show();
            $(comPosted).prepend('<ul><li>' + comName.value + ' Says ' + comComment.value + '</li></ul>');
            $(comName).val('');
            $(comComment).val('');
        }
    });

    $(comName).on('blur', function () {
        if (comName.value === '') {
            $(comTestOne).show();
            $(comTestOne).addClass('invalid');
        } else {
            $(comTestOne).hide();
            $(comTestOne).removeClass('invalid');
        }
    });

    $(comComment).on('blur', function () {
        if (comComment.value === '') {
            $(comTestTwo).show();
            $(comTestTwo).addClass('invalid');
        } else {
            $(comTestTwo).hide();
            $(comTestTwo).removeClass('invalid');
        }
    });

});