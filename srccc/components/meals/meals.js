/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
// import styles from '../css_modules/questions.module.css';

const Meal = ({ meals }) => (
// const shuffleOptions = arr => {
//   arr.sort(() => Math.random() - 0.5);
// };

  // const validate = (selected, answer, id) => {
  //   const selectedOption = document.getElementById(id);
  //   return selected === answer
  //     ? selectedOption.classList.add(`${styles.right}`)
  //     : selectedOption.classList.add(`${styles.wrong}`);
  // };

  // const optionList = (arr, ans) => {
  //   const options = [...arr, ans];
  //   shuffleOptions(options);
  //   return options.length ? (
  //     options.map(opt => {
  //       const thisId = uuidv4();
  //       return (
  //         <li
  //           key={thisId}
  //           type="submit"
  //           id={thisId}
  //           dangerouslySetInnerHTML={{ __html: opt }}
  //           onClick={() => {
  //             validate(opt, ans, thisId);
  //           }}
  //         />
  //       );
  //     })
  //   ) : (
  //     <p>Loading questions...</p>
  //   );
  // };

  <article>
    <p>
      Difficulty:
      {/* { console.log('##############') } */}
      {/* { console.log(meals) } */}

      {' '}
      {meals}
    </p>
    {/* <h4 className={styles.question} dangerouslySetInnerHTML={{ __html: question.question }} />
      <ul className={styles.optionList}>
        {optionList(question.incorrect_answers, question.correct_answer)}
      </ul> */}
  </article>
);
Meal.propTypes = {
  // question: PropTypes.shape({
  // category: PropTypes.string,
  // question: PropTypes.string,
  // difficulty: PropTypes.string,
  meals: PropTypes.string.isRequired,
  // incorrect_answers: PropTypes.arrayOf(String),
  // correct_answer: PropTypes.string,
  // }).isRequired,
};

export default Meal;
