import Footer from '../../../components/Footer.js';
import styles from '../../../styles/Home.module.css'
// import dummydata from '../../../data/dummydata.js';
import { useState, useEffect } from 'react';

import axios from 'axios';

const CardData = ({parentId, clickHandler = () => {}, quizCnt, dummyData}) => {
    let quiz = dummyData.filter(data => data.parentId == parentId);
    if (quiz.length > 0) {
        quiz = quiz[0]
    } else {
        return <h1>End</h1>
    }
    let answers = dummyData.filter(data => data.parentId == quiz.id);

    const [activeAnswer, setActiveAnswer] = useState(answers[0].id);

    return (
        <>
        <div className={`h-full w-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-${quiz.configuration.bgColor}-500 text-${quiz.configuration.textColor}-700`}>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{quizCnt} Quiz</h2>
            <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{quiz.result}</h1>
            {answers.map(answer => (
                // <li onClick={() => clickHandler(answer.id)} key={answer.result}>{answer.result}</li>
                <p onClick={() => setActiveAnswer(answer.id)} key={answer.result} className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke={answer.id === activeAnswer ? "currentColor" : ""} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    </span>
                    {answer.result}
                </p>
            ))}
            <button onClick={() => {clickHandler(activeAnswer)}} className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
        </>
    )
}

export default function Start() {
    const [quizID, setQuizID] = useState(-1);
    const [quizCnt, setQuizCnt] = useState(0);
    const nextQuiz = async (id = 0) => {
        await axios.post('/api/quizApi', {
            
        });
        setQuizID(id);
        setQuizCnt(quizCnt + 1);
    }
    
    const [dummyData, setDummyData] = useState([]);
    useEffect(() => {
        let res;
        async function fetchData() {
            res = await axios.get('/api/quizApi');
            setDummyData(res.data.dummyData.default);
        }
        fetchData();
    }, [])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={async () => {
                    let res = await axios.put('/api/quizApi');
                    console.log(res)
                }}>PUT</button>
                { quizID < 0 ? (
                    <h1 onClick={() => {nextQuiz(0)}}>start quiz</h1>
                ) : (
                    <>
                        <CardData parentId={quizID} clickHandler={nextQuiz} quizCnt={quizCnt} dummyData={dummyData}/>
                    </>
                )}
            </main>
            <Footer></Footer>
        </div>  
    )
}