$(document).ready(function () {
    $('#bandInfo').show();
    $('#bandInfo').addClass('.active');
    $('#music').hide();
    $('#pics').hide();
    $('#vids').hide();
    $('#social').hide();
    $('#book').hide();
    $('#stream').hide();
    $('#download').hide();
    
    $('#bandTab').on('click', function () {
        $('#music').hide();
        $('#bandInfo').show();
        $('#pics').hide();
        $('#vids').hide();
        $('#social').hide();
        $('#book').hide();
        $('#stream').hide();
        $('#download').hide();
    });

    $('#musicTab').on('click', function () {
        $('#music').show();
        $('#bandInfo').hide();
        $('#pics').hide();
        $('#vids').hide();
        $('#social').hide();
        $('#book').hide();
        $('#stream').hide();
        $('#download').hide();
    });
    
    $('#picTab').on('click', function () {
        $('#music').hide();
        $('#bandInfo').hide();
        $('#pics').show();
        $('#vids').hide();
        $('#social').hide();
        $('#book').hide();
        $('#stream').hide();
        $('#download').hide();
    });
    
    $('#vidTab').on('click', function () {
        $('#music').hide();
        $('#bandInfo').hide();
        $('#pics').hide();
        $('#vids').show();
        $('#social').hide();
        $('#book').hide();
        $('#stream').hide();
        $('#download').hide();
    });
    
    $('#socialTab').on('click', function () {
        $('#music').hide();
        $('#bandInfo').hide();
        $('#pics').hide();
        $('#vids').hide();
        $('#social').show();
        $('#book').hide();
        $('#stream').hide();
        $('#download').hide();
    });
    
    $('#bookTab').on('click', function () {
        $('#music').hide();
        $('#bandInfo').hide();
        $('#pics').hide();
        $('#vids').hide();
        $('#social').hide();
        $('#book').show();
        $('#stream').hide();
        $('#download').hide();
    });
    
    $('#streamTab').on('click', function () {
        $('#music').hide();
        $('#bandInfo').hide();
        $('#pics').hide();
        $('#vids').hide();
        $('#social').hide();
        $('#book').hide();
        $('#stream').show();
        $('#download').hide();
    });
    
    $('#downTab').on('click', function () {
        $('#music').hide();
        $('#bandInfo').hide();
        $('#pics').hide();
        $('#vids').hide();
        $('#social').hide();
        $('#book').hide();
        $('#stream').hide();
        $('#download').show();
    });
});