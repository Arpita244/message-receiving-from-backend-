const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
res.send("welcome")
})
app.post("/submit",(req,res)=>{
    const { name, age, gender, hobbies, contact, message } = req.body;
    console.log("Received form data: ",{name, age, gender, hobbies, contact, message});
     // Create a hopeful message
  const hopefulMessage = `Dear ${name},\n
  At the age of ${age}, you're already creating a unique story. As a ${gender},
   your passion for "${hobbies}" and your willingness to share your thoughts are 
   truly inspiring. Keep shining and reaching out! The world is brighter because of 
   people like you.`;

  res.status(200).json({ hopefulMessage });
  console.log(hopefulMessage);
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});