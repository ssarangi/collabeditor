var username = prompt("Please enter your name", "Jane Doe");
var socket = io();
socket.emit("user_connected", username);

$("#form").submit(function() {
    $("#messages").append($('<li>').text("You: " + $("#m").val()));
    socket.emit("chat_message", username + ": " + $("#m").val());
    $("#m").val('');
    return false;
});

socket.on('chat message', function(msg) {
    $("#messages").append($('<li>').text(msg));
});

socket.on('user_connected', function(user) {
   $("#messages").append($('<li style="background:red">').text(user + " joined the chat")); 
});