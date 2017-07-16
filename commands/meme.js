var AuthDetails = require('../config.json');

var meme = {
	"brace": 61546,
	"mostinteresting": 61532,
	"fry": 61520,
	"onedoesnot": 61579,
	"yuno": 61527,
	"success": 61544,
	"allthethings": 61533,
	"doge": 8072285,
	"drevil": 40945639,
	"skeptical": 101711,
	"notime": 442575,
	"yodawg": 101716,
	"awkwardpenguin": 61584
};

exports.run = (client, msg, args) => {
  var tags = msg.content.split('"');
		var memetype = tags[0].split(" ")[1];
		//msg.channel.sendMessage(tags);
		var Imgflipper = require("imgflipper");
		var imgflipper = new Imgflipper(AuthDetails.imgflip_username, AuthDetails.imgflip_password);
		imgflipper.generateMeme(meme[memetype], tags[1]?tags[1]:"", tags[3]?tags[3]:"", function(err, image){
			//console.log(arguments);
			msg.channel.send(image);
		});
	}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }

  exports.help = {
    name: 'meme',
    description: 'Generates a random meme. Currently available memes: \n brace \n mostinteresting \n fry \n onedoesnot \n yuno \n success \n allthethings \n doge \n drevil \n skeptical \n notime \n yodwag \n awkwardpenguin',
    usage: 'meme <meme name> <top text> <bottom text>'
  }
