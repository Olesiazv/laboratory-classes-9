const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://olesiazavhorodnia5:***@cluster0.ghewbfo.mongodb.net/library')
  .then(() => console.log('✅ Успішне підключення до MongoDB Atlas'))
  .catch(err => console.error('❌ Помилка підключення:', err));
