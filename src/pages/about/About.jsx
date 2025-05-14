import React from 'react';
const About = () => {
    return (
        <div className='p-2 lg:p-12 space-y-4'>
            <div className='w-full  bg-pink-300 rounded-2xl p-2 lg:p-12 space-y-4'>
                <div className='text-2xl'>What is useState and how does it work in React?</div>
                <div className=' border-t border-dashed border-white '>
                    <div className='text-blue-500'>Answer</div>
                    <div> useState gives  a variable to store a value and a function to update that value.</div>
                </div>
                <div className=' border-t border-dashed border-white '>Added at 2025-05-25</div>
            </div>
            <div className='w-full  bg-pink-300 rounded-2xl p-2 lg:p-12 space-y-4'>
                <div className='text-2xl'>What is the purpose of useEffect in React?</div>
                <div className=' border-t border-dashed border-white '>
                    <div className='text-blue-500'>Answer</div>
                    <div>It runs code after the component renders.
                        It is used to handle side effects like:Fetching data from an API. Updating the DOM manually. 
                        Setting up a timer.Listening to events (scroll, resize, etc.)</div>
                </div>
                <div className=' border-t border-dashed border-white '>Added at 2025-05-25</div>
            </div>
            <div className='w-full  bg-pink-300 rounded-2xl p-2 lg:p-12 space-y-4'>
                <div className='text-2xl'>What is a custom hook in React and when should you use one?</div>
                <div className=' border-t border-dashed border-white '>
                    <div className='text-blue-500'>Answer</div>
                    <div>A custom hook is just a regular JavaScript function that can use built-in React hooks (like useState, useEffect, etc.) to provide some functionality.</div>
                </div>
                <div className=' border-t border-dashed border-white '>Added at 2025-05-25</div>
            </div>
            <div className='w-full  bg-pink-300 rounded-2xl p-2 lg:p-12 space-y-4'>
                <div className='text-2xl'>Difference between controlled and uncontrolled components. Which one is better?</div>
                <div className=' border-t border-dashed border-white '>
                    <div className='text-blue-500'>Answer</div>
                    <div>A controlled component is an input element (like a text field, checkbox, etc.) whose value is controlled by React state.
                    An uncontrolled component is an input element whose value is not controlled by React state.
                    Controlled components are better for most scenarios, especially when  need to track and manage form data or other user inputs.
                    </div>
                </div>
                <div className=' border-t border-dashed border-white '>Added at 2025-05-25</div>
            </div>
            <div className='w-full  bg-pink-300 rounded-2xl p-2 lg:p-12 space-y-4'>
                <div className='text-2xl'>Tell us something about useFormStatus() in React.</div>
                <div className=' border-t border-dashed border-white '>
                    <div className='text-blue-500'>Answer</div>
                    <div>The useFormStatus() hook is a new feature introduced in React 18 as part of the Concurrent Rendering capabilities.
                         It's designed to help manage the form submission state (like pending, submitted, or errors) in forms more efficiently.</div>
                </div>
                <div className=' border-t border-dashed border-white '>Added at 2025-05-25</div>
            </div>
        </div>
    );
};

export default About;