$(document).ready(function() {
    $('#form1').submit(function(event) {
        event.preventDefault();

        var todoText = $('#inputid').val().trim();

        if (todoText !== "") {
            if ($('#lista').is(':visible')) {
                var newItem = $('<li style="display: none;">' + todoText + '</li>');

                $('#lista').append(newItem);
                newItem.fadeIn(1500);
            } else {
                $('#lista').fadeIn(1500, function() {
                    var newItem = $('<li style="display: none;">' + todoText + '</li>');
                    $('#lista').append(newItem);
                    newItem.fadeIn(1500);
                });
            }
            $('#form1').submit(function(e) {
                e.preventDefault();
                var taskName = $('#inputid').val().trim();
                if (taskName !== '') {
                    $('#lista').append('<li>' + taskName + '</li>');
                    $('#inputid').val('');
                }
            });

            $('#inputid').val('');
        }
    });
    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
