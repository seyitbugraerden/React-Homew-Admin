const express = require('express');
const path = require('path');
const app = express();

// React uygulamanızın üretim build dosyasını sunmak için bir endpoint tanımlayın
app.use(express.static(path.join(__dirname, 'dist')));

// Tüm istekleri React uygulamasına yönlendirin
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Sunucuyu belirlediğiniz bir portta başlatın
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});
