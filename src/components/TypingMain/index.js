import React from 'react';
import { Typing, TypingStep } from "typing-effect-reactjs";
const TypingMain = ({ height }) => {
    console.log(height, 'height')
    return (
        <div className='typingmain' style={{ height: height }}>
            <h1>
                {/* <Typing text={['항상 발전하는 풀스택 개발자 서명석 입니다']} /> */}
                <TypingStep
                    sequence={[
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                        {
                            content: "항상 발전하는\n 풀스택 개발자\n 서명석 입니다 ",
                        },
                        {
                            content: 10000, // 100ms delay
                        },
                        {
                            content: -26, // Delete 16 characters
                        },
                    ]}
                />
            </h1>
        </div>
    );
};

export default TypingMain;