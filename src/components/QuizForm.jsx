import React from 'react';
import { useGlobalContext } from './Context';

const QuizForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <section className='quiz quiz-small'>
      <form>
        <h2 style={{ marginBottom: '2rem' }}>Let's Start Quiz</h2>
        <div className='form3'>
          <label for='noOfQuestions' className='form-label'>
            Number of Questions:
          </label>
          <input
            className='input'
            type='number'
            name='amount'
            value={quiz.amount}
            onChange={handleChange}
            min={1}
            max={50}
          />
        </div>
        <div className='form3'>
          <label for='category' className='form-label'>
            Category:
          </label>
          <select
            className='category'
            name='category'
            id='category'
            value={quiz.category}
            onChange={handleChange}
          >
            <option value='books'>Books</option>
            <option value='films'>Films</option>
            <option value='music'>Music</option>
            <option value='computer'>Computer</option>
            <option value='sports'>Sports</option>
            <option value='history'>History</option>
            <option value='vehicles'>Vehicles</option>
          </select>
        </div>

        <div className='form3'>
          <label for='difficulty' className='form-label'>
            Difficulty:
          </label>
          <select
            className='difficulty'
            name='difficulty'
            id='difficulty'
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value='easy'>Beginner</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Expert</option>
          </select>
        </div>
        {error && (
          <p className='error'>
            Can't generate questions, please try other options
          </p>
        )}
        <button type='submit' onClick={handleSubmit} className='start-btn'>
          Start
        </button>
      </form>
    </section>
  );
};

export default QuizForm;
