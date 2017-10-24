var TelegramBot = require('node-telegram-bot-api'),
bot = new TelegramBot("432101548:AAF4R2-AAbrRCRp2txEerTs9s4IIAWfkoKA", { polling: true });
console.log("______________________________________________________________________________________________")
console.log()

bot.onText(/\/yee/, (msg) => {
	bot.sendDocument(msg.chat.id,"http://i3.kym-cdn.com/photos/images/newsfeed/000/823/349/06f.gif",{caption : "YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!"} );
	console.log("Yee!")
});

bot.onText(/\/buye/, (msg) => {
	bot.sendPhoto(msg.chat.id,"https://pbs.twimg.com/profile_images/508163670141313024/woNSTb3L.jpeg" );
	console.log("Mr. Buye!")

});

bot.onText(/\/forney/, (msg) => {
	bot.sendPhoto(msg.chat.id,"https://lh3.googleusercontent.com/-NQoH7u_IEuQ/AAAAAAAAAAI/AAAAAAAAABA/AzIRwAjg8Ro/photo.jpg?sz=512" );
	console.log("Ms. Forney!")

});

bot.on('message', (msg) => {
	
	    if (msg.text.toLowerCase().includes("bot")) {
		bot.sendMessage(msg.chat.id,  "<b>That's me!</b>" ,{parse_mode : "HTML"});
		console.log("That's me!")}

    if (msg.text.toLowerCase().includes("fuck")) {
		bot.sendMessage(msg.chat.id, msg.from.first_name + ", you said the word <b>fuck</b> which is not allowed in this chat.\nIf you keep cursing, then I will have to kick you out." ,{parse_mode : "HTML"});
		console.log(msg.from.first_name + " said fuck!")}


	if (msg.text.toLowerCase().includes("shit")) {
		bot.sendMessage(msg.chat.id, msg.from.first_name + ", you said the word <b>shit</b> which is not allowed in this chat.\nIf you keep cursing, then I will have to kick you out." ,{parse_mode : "HTML"}); 
		console.log(msg.from.first_name + " said shit!")}

	if (msg.text.toLowerCase().includes("nigger")) {
		bot.sendMessage(msg.chat.id, msg.from.first_name + ", you said the word <b>nigger</b> which is not allowed in this chat.\nIf you keep cursing, then I will have to kick you out." ,{parse_mode : "HTML"}); 
		console.log(msg.from.first_name + " said nigger!")}

	if (msg.text.toLowerCase().includes("nigga")) {
		bot.sendMessage(msg.chat.id, msg.from.first_name + ", you said the word <b>nigga</b> which is not allowed in this chat.\nIf you keep cursing, then I will have to kick you out." ,{parse_mode : "HTML"}); 
		console.log(msg.from.first_name + " said nigga!")}

	if (msg.text.toLowerCase().includes("bitch")) {
		bot.sendMessage(msg.chat.id, msg.from.first_name + ", you said the word <b>bitch</b> which is not allowed in this chat.\nIf you keep cursing, then I will have to kick you out." ,{parse_mode : "HTML"}); 
		console.log(msg.from.first_name + " said bitch!")}
		
	if (msg.text.toLowerCase().includes("dick")) {
		bot.sendMessage(msg.chat.id, msg.from.first_name + ", you said the word <b>dick</b> which is not allowed in this chat.\nIf you keep cursing, then I will have to kick you out." ,{parse_mode : "HTML"});
		console.log(msg.from.first_name + " said dick!")} 
	
	if (msg.text.toLowerCase().includes("pussy")) {
		bot.sendMessage(msg.chat.id, msg.from.first_name + ", you said the word <b>pussy</b> which is not allowed in this chat.\nIf you keep cursing, then I will have to kick you out." ,{parse_mode : "HTML"});
		console.log(msg.from.first_name + " said pussy!")} 
	
	
	
})