'use client'


import React from 'react'



import Notification from 'rc-notification';

const testFn = () => {
    Notification.newInstance(
        {}, Notification => {
            Notification.notice({
                content: 'test content'
            })
        }
    )
}

const Test = () => {
    return (
        <div>
            test
            <button onClick={testFn}>click</button>
        </div>
    )
}

export default Test