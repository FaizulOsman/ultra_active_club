import React from 'react';

const Questions = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-5'>Questions and Answers</h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-neutral rounded-md">
                <div className="collapse-title text-xl font-medium">
                    How does React work?
                </div>
                <div className="collapse-content text-sm">
                    <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-neutral rounded-md">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between props and state?
                </div>
                <div className="collapse-content text-sm">
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-neutral rounded-md">
                <div className="collapse-title text-xl font-medium">
                    Where will we use useEffect except loading data?
                </div>
                <div className="collapse-content text-sm">
                    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: </p>
                    <li>Running on state change: validating input field. </li>
                    <li>Running on state change: live filtering.</li>
                    <li>Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update.</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price.</li>
                </div>
            </div>
        </div>
    );
};

export default Questions;