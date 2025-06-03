const mongoose = require('mongoose');
const Author = require('./models/Author');
const Book = require('./models/Book');

// 🔐 Підключись до MongoDB Atlas
mongoose.connect('mongodb+srv://olesiazavhorodnia5:***@cluster0.ghewbfo.mongodb.net/library')
  .then(async () => {
    console.log('Connected to MongoDB Atlas');


    await Author.deleteMany();
    await Book.deleteMany();

  
    const authors = await Author.insertMany([
      { firstName: 'Ліна', lastName: 'Костенко' },
      { firstName: 'Іван', lastName: 'Франко' },
      { firstName: 'Оксана', lastName: 'Забужко' }
    ]);

  
    const books = await Book.insertMany([
      { title: 'Маруся Чурай', year: 1979, author: authors[0]._id },
      { title: 'Захар Беркут', year: 1883, author: authors[1]._id },
      { title: 'Польові дослідження з українського сексу', year: 1996, author: authors[2]._id }
    ]);

    console.log('✅ Seed data inserted!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
