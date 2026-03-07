const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.static('.'));

app.post('/send', async (req, res) => {
    const { receiver, amount, method } = req.body;
    const message = `SuperWallet: ${amount} TK has been sent to ${receiver} via ${method}.`;
    
    // তোমার Traccar Local Service Token
    const token = '81e3a1b3-de7e-4fad-ae22-7eba08d2de21';

    try {
        // Traccar API এর মাধ্যমে মেসেজ পাঠানো
        await axios.post('https://www.traccar.org/sms/', {
            to: receiver,
            message: message,
            token: token
        });
        res.json({ message: "সফল! তোমার ফোন থেকে মেসেজ পাঠানো হচ্ছে।" });
    } catch (error) {
        res.status(500).json({ message: "মেসেজ পাঠাতে সমস্যা হয়েছে। অ্যাপে Enable Service চেক করো।" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
