jQuery(document).ready(function($) {
    // Initialize WordPress jQuery UI Datepicker
    $('.wcsendsmsdatepicker').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: '-10:+1'
    });
});
