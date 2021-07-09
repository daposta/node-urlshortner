const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 5000;
const dbUrl = process.env.MONGODB_URI;



// console.log(typeof(dbUrl));
//connect to mongo db
mongoose.connect(dbUrl, { useNewUrlParser: true , useUnifiedTopology: true,
 useCreateIndex: true, }, ()=>{
  console.log('Connected to DB');
})
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});


