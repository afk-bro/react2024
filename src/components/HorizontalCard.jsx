import React from 'react'

import prof_student_img from "../assets/images/prof_lady.jpg"
import logo from "../assets/images/logo.png"

const HorizontalCard = () => {
    return (
        <div>
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${prof_student_img})` }} title="Woman with Teacher">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center">
                            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                            </svg>
                            Unlock your potential
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">Practice makes perfect</div>
                        <p className="text-gray-700 text-base">Discover the convenience of online English tutoring: flexible schedules, personalized lessons, interactive tools, and progress tracking. 
                            Benefit from qualified tutors, affordable rates, and a global learning community. Start achieving your language goals today with us!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard