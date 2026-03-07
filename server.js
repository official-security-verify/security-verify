const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(express.static('.'));

app.post('/send', async (req, res) => {
    const { receiver, amount, method } = req.body;
    const message = `SuperWallet: ${amount} TK sent to ${receiver} via ${method}.`;
    
    // তোমার নতুন লোকাল আইপি ও টোকেন
    const token = '81e3a1b3-de7e-4fad-ae22-7eba08d2de21';
    const gatewayUrl = 'http://192.168.16.110:8082/'; // স্ক্রিনশট অনুযায়ী নতুন আইপি

    try {
        await axios.get(`${gatewayUrl}?to=${receiver}&message=${encodeURIComponent(message)}&token=${token}`);
        res.json({ message: "সফল! তোমার ফোন থেকে মেসেজ পাঠানো হচ্ছে।" });
    } catch (error) {
        res.json({ message: "সার্ভার কাজ করছে না। নিশ্চিত করো ফোন ও পিসি একই ওয়াইফাই-তে আছে।" });
    }
});

app.listen(process.env.PORT || 3000);
