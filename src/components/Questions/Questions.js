import React from 'react';

const Questions = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-neutral rounded-md">
                <div className="collapse-title text-xl font-medium">
                    How does React work?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-neutral rounded-md">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between props and state?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-neutral rounded-md">
                <div className="collapse-title text-xl font-medium">
                    Where will we use useEffect except loading data?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;