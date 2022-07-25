// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dummyData = require('../../../data/dummydata');

export default function handler(req, res) {
    res.status(200).json({ 
        dummyData: dummyData 
    })
}