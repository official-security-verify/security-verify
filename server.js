const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.post('/transfer', (req, res) => {
    console.log("টাকা পাঠানোর অনুরোধ এসেছে...");
    res.send({ message: "মেসেজ পাঠানো হয়েছে!", id: Math.random() });
});

app.listen(3000, () => console.log('সার্ভার চলছে ৩০০০ পোর্টে'));

