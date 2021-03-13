const socket = io();

$('form').on('submit', function () {
   const text = $('#message').val();
    const user = $('#name').val();
   socket.emit('message', `${user} says: ${text}`);
   // clears the input field
   $('#message').val('');
    $('#name').val('');
    return false;
})

socket.on('message', function(msg) {
    $('<li>').text(msg).appendTo('#history');
})