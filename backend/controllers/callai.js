const axios = require("axios")
const {Questions} = require("../storeData")

let Grole;
let Gdifficulty;
let GCompany;


const senddata = async (req , res)=>{
    const {role , difficulty , duration , Company} = req.body;
    Grole = role;
    Gdifficulty = difficulty;
    GCompany = Company;
    const interviewId = 1;

    try{
        const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            model:"openai/gpt-oss-120b:free",
            messages:[
                {
                    role:"system",
                    content:`
                            You are an interviewer conducting a mock interview.

                            IMPORTANT:
                            - The candidate is NOT necessarily working at ${Company}.
                            - ${Company} is ONLY the interview focus area or company type.
                            - The interview is for the role: ${role}.

                            Rules:
                            - ask ONLY 2 questions
                            - 1 - Start with introduction, Ask about projects and experience.
                            - 2 - Then move into technical questions.
                            - difficulty based on ${difficulty}.
                            - Be realistic.
                            - Return valid JSON only like this,NO markdown , NO explanation
                            -- Avoid repeating previous questions or topics unnecessarily.

                            FORMAT:
                            {
                            "questions":["..." ,"..."]
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

    let parsed;
    try{
        parsed = JSON.parse(aigive);
    }
    catch(err){
        return res.status(500).json({
            error: "Invalid AI JSON Response",
            aigive,
        });
    }

    Questions.push(...parsed.questions);
    return res.status(200).json({
        interviewId,
        Questions
    });
    }
    catch(error){
        console.log(error.response?.data || error.message);
        
        return res.status(500).json({
            error: "AI Request Failed",
        })
    }
    
}

const sendNext = async (req , res)=>{
    const {answer} = req.body;

    try{
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model:"openai/gpt-oss-120b:free",
                messages:[
                    {
                        role:"system",
                        content:`
                        You are an interviewer conducting a mock interview.

                            IMPORTANT:
                            - The candidate is NOT necessarily working at ${GCompany}.
                            - ${GCompany} is ONLY the interview focus area or company type.
                            - The interview is for the role: ${Grole}.

                            Rules:
                            - Ask exactly ONE question.
                            - Do not ask multiple questions.
                            - Analyze the candidate's answer ,
                            - The next question may be a follow-up or a new topic, whichever is more realistic for a real interviewer.
                            - Maintain a natural interview flow. Not every question must be a direct follow-up. Sometimes change topics just as a human interviewer would.
                            - Keep the interview moving forward naturally.
                            - adapt difficulty based on ${Gdifficulty} and answer level.
                            - Be realistic.
                            - Avoid repeating previous questions or topics unnecessarily.
                            - Return valid JSON only like this,NO markdown , NO explanation

                            FORMAT:
                            {
                            "question":["..."]
                            }
                        `
                    },
                    {
                        role:"user",
                        content:`Candidate answer:${answer}`
                    }
                ],
            },
            {
                headers: {
                    Authorization:`Bearer ${process.env.Openrouter_api}`,
                    "Content-Type":"application/json",
                }
            }
        );

        const nextQues= await response.data.choices[0].message.content;
        console.log(nextQues);
        
        let parsed;
        try{
            parsed = JSON.parse(nextQues);
        }
        catch(error){
            return res.status(500).json({
                error:"AI invalid JSON",
                nextQues,
            });
        }

        return res.status(200).json(parsed);
        
    }
    catch(error){

        console.log(error.response?.data || error.message);
        return res.status(500).json({
            error:"API crashed",

        })
    }
}

module.exports = {senddata , sendNext}