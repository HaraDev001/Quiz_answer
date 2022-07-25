// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dummyData = require('../../data/dummydata');
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === "GET") {

        res.status(200).json({ 
            dummyData: dummyData 
        })
    } else if (req.method === "POST") {
        res.status(200).json({ 
            success: true 
        });
    } else if (req.method === "PUT") {
        
        for (let i = 0; i < dummyData.default.length; i ++) {
            try {
                if (!dummyData.default[i].quiz) {
                    let res = await axios.put(`https://merch-test.shopvida.com/onboard-quizs/${dummyData.default[i].id}`, {
                        "configuration": dummyData.default[i].configuration,
                        "parentId": dummyData.default[i].parentId,
                        "result": dummyData.default[i].result,
                        "email": "adriel.lee@gmail.com",
                        "created_at": "2021-10-07T22:47:01.286Z",
                        "updated_at": "2021-10-25T21:40:15.206Z"
                    }, {
                        headers: {
                            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjMzNjQyNzgzLCJleHAiOjE2MzYyMzQ3ODN9.yZDFBjY_xd_MuvLq4937lOKSzJwpc14KN8SRIDlxbfI"}`
                        }
                    });
                }
            } catch(e) {
                console.log(e)
            }
        }
        res.status(200).json({
            success: true
        });
    } else {
        res.status(500).send();
    }
}