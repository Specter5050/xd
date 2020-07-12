const config = {
  "ownerID": "",//Bu kısıma, kendi ID'niz. 
  "sahip": [""],
  "admins": [""],//Yetkili eklemek isterseniz, o kişinin ID'si.
  "support": [""],//Destek ekibi eklemek isterseniz, o kişinin ID'si.
  "token": "",//Botun, tokeni.
  "dashboard" : {
    "oauthSecret": "",//Client secret.
    "callbackURL": `https://musicsmith.glitch.me/callback`,//oAuth2 kısmında bulunan kutucuğa, bu bağlantıyı ekleyiniz.
    "sessionSecret": "efhemdia",//sallayın yada ellemeyin
    "domain": "https://musicsmith.glitch.me/"//Sitenin, adresi.
  }
};

module.exports = config;
