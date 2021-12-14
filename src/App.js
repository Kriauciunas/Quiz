import React from 'react';
import { useGlobalContext } from './components/Context';
import Loading from './components/Loading';
import QuizForm from './components/QuizForm';
import Modal from './components/Modal';

const App = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <QuizForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p>
          Correct Answer: {correct}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div>
            {answers.map((answer, index) => {
              return (
                <>
                  <button
                    key={index}
                    className='answer-btn'
                    onClick={() => checkAnswer(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </>
              );
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          Next Question
        </button>
      </section>
    </main>
  );
};

export default App;
