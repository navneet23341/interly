const axios = require("axios")

const senddata = async (req , res)=>{
    const {role , difficulty , duration , Company} = req.body;

    try{
        const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            model:"openai/gpt-oss-120b:free",
            messages:[
                {
                    role:"system",
                    content:`You are an interviewer of ${Company}, so ask according to that.

                            Rules:
                            - Start with introductions.
                            - Ask about projects.
                            - Then move into technical questions.
                            - Adapt difficulty based on answers.
                            - Be realistic.
                            - Return valid JSON only like this.
                            {
                            "questions":["..." ,"...","..."]
                            }
                            `
                },
                {
                    role:"user",
                    content:`Role: ${role}
                                Company: ${Company}
                                Difficulty: ${difficulty}
                                Duration: ${duration}`
                },
            ],
        },
        {
            headers:{
                Authorization:`Bearer ${process.env.Openrouter_api}`,
                "Content-Type":"application/json"
            }
        }
    );

    const aigive = response.data.choices[0].message.content;

    console.log(aigive);
    }
    catch(error){
        console.log(error.response?.data);
    }
    
}

module.exports = {senddata}