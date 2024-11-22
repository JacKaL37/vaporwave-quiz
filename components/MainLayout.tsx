"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import QuizPanel from './QuizPanel'
import { lessons } from './quizData'
import ReactMarkdown from 'react-markdown'

export const MainLayout: React.FC = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [highScores, setHighScores] = useState<number[]>(new Array(lessons.length).fill(0))

  useEffect(() => {
    const storedHighScores = localStorage.getItem('lessonHighScores')
    if (storedHighScores) {
      setHighScores(JSON.parse(storedHighScores))
    }
  }, [])

  const currentLesson = lessons[currentLessonIndex]

  const updateHighScore = (newScore: number) => {
    const newHighScores = [...highScores]
    if (newScore > newHighScores[currentLessonIndex]) {
      newHighScores[currentLessonIndex] = newScore
      setHighScores(newHighScores)
      localStorage.setItem('lessonHighScores', JSON.stringify(newHighScores))
    }
  }

  const navigateLesson = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    } else if (direction === 'next' && currentLessonIndex < lessons.length - 1) {
      if (!currentLesson.lessonQuiz || highScores[currentLessonIndex] === 3) {
        setCurrentLessonIndex(currentLessonIndex + 1)
      } else {
        alert("Please complete the quiz with full marks to proceed to the next lesson.")
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-indigo-800 text-white font-mono">
      <header className="bg-black bg-opacity-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600">
            {currentLesson.lessonName}
          </h1>
          <div className="flex items-center space-x-4">
            {currentLesson.lessonQuiz && (
              <div className="flex flex-col items-center">
                <Button 
                  onClick={() => setIsQuizOpen(true)}
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  Enter the Quiz Zone
                </Button>
                <span className="text-sm mt-1">Top Score: {highScores[currentLessonIndex]}/3</span>
              </div>
            )}
            <div className="flex space-x-2">
              <Button 
                onClick={() => navigateLesson('prev')} 
                disabled={currentLessonIndex === 0}
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transform hover:scale-105 transition duration-300 ease-in-out disabled:opacity-50"
              >
                Previous
              </Button>
              <Button 
                onClick={() => navigateLesson('next')} 
                disabled={currentLessonIndex === lessons.length - 1}
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transform hover:scale-105 transition duration-300 ease-in-out disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="relative">
        <div className="z-50 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <ReactMarkdown className="wd-"
            components={{
              h1: ({node, ...props}) => <h1 className="text-4xl font-extrabold text-cyan-100 mb-4 shadow-neon-cyan" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-fuchsia-100 mb-3 shadow-neon-pink" {...props} />,
              p: ({node, ...props}) => <p className="text-lg text-indigo-100 mb-4 shadow-neon-indigo" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4" {...props} />,
              li: ({node, ...props}) => <li className="text-green-200 mb-2" {...props} />,
            }}
          >
            {currentLesson.lessonContent}
          </ReactMarkdown>
        </div>
        <div className="z-10 absolute top-1/2 left-1/4 w-64 h-64 bg-fuchsia-500 rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-blob pointer-events-none"></div>
        <div className="z-10 absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
        <div className="z-10 absolute bottom-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>
      </main>
      {currentLesson.lessonQuiz && (
        <QuizPanel 
          isOpen={isQuizOpen} 
          onClose={() => setIsQuizOpen(false)} 
          questions={currentLesson.lessonQuiz.questions}
          updateHighScore={updateHighScore}
        />
      )}
    </div>
  )
}

export default MainLayout

