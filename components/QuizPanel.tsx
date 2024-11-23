"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { QuizQuestion } from './quizData'
import { X } from 'lucide-react'
import _ from 'lodash' // using lodash for shuffling

interface QuizPanelProps {
  isOpen: boolean
  onClose: () => void
  questions: QuizQuestion[]
  updateHighScore: (score: number) => void
  onNextLesson: () => void // New prop
}

const QuizPanel: React.FC<QuizPanelProps> = ({ isOpen, onClose, questions, updateHighScore, onNextLesson }) => {
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // shuffle questions
      const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 3)

      // shuffle choices for each question
      const questionsWithShuffledChoices = shuffledQuestions.map(question => {
        const shuffledChoices = _.shuffle(question.choices)
        return {
          ...question,
          choices: shuffledChoices,
          correctAnswer: shuffledChoices.indexOf(question.choices[question.correctAnswer])
        }
      })

      setCurrentQuestions(questionsWithShuffledChoices)
      setCurrentQuestionIndex(0)
      setSelectedAnswer(null)
      setUserAnswers([])
      setScore(0)
      setQuizCompleted(false)
    }
  }, [isOpen, questions])


  const handleAnswerSelection = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setUserAnswers([...userAnswers, selectedAnswer])
      if (selectedAnswer === currentQuestions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1)
      }

      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
      } else {
        const finalScore = score + (selectedAnswer === currentQuestions[currentQuestionIndex].correctAnswer ? 1 : 0)
        setScore(finalScore)
        setQuizCompleted(true)
        updateHighScore(finalScore)
      }
    }
  }

  const restartQuiz = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random())
    setCurrentQuestions(shuffled.slice(0, 3))
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setUserAnswers([])
    setScore(0)
    setQuizCompleted(false)
  }

  if (currentQuestions.length === 0) {
    return null
  }

  return (
    <div className={`fixed inset-y-0 right-0 w-full md:w-[32rem] bg-gradient-to-bl from-purple-900 via-pink-800 to-indigo-900 shadow-2xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out overflow-y-auto`}>
      <div className="p-8 relative">
        <Button 
          variant="ghost" 
          className="absolute top-4 right-4 text-cyan-300 hover:text-pink-300 transition-colors duration-300"
          onClick={onClose}
        >
          <X className="h-8 w-8" />
        </Button>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 mb-8">Neon Quiz Zone</h2>
        {quizCompleted ? (
          <div className="space-y-8">
            <Card className="bg-black bg-opacity-50 border-2 border-cyan-500 text-white">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-cyan-300">Quiz Completed!</CardTitle>
                <CardDescription className="text-pink-300">Your cosmic score:</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-yellow-300">{score} / {currentQuestions.length}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  onClick={restartQuiz}
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  Reboot Quiz
                </Button>
                <Button 
                  onClick={() => {
                    onClose()
                    onNextLesson()
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  Next Lesson
                </Button>
              </CardFooter>
            </Card>
            <h3 className="text-2xl font-bold text-cyan-300 mt-8 mb-4">Question Feedback:</h3>
            {currentQuestions.map((question, index) => (
              <Card key={index} className="mb-6 bg-black bg-opacity-50 border-2 border-pink-500 text-white transform hover:scale-105 transition duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-pink-300">Question {index + 1}</CardTitle>
                  <CardDescription className="text-cyan-200">{question.question}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-yellow-300">
                    Your answer: {question.choices[userAnswers[index]]}
                  </p>
                  <p className="font-semibold text-green-300 mt-2">
                    Correct answer: {question.choices[question.correctAnswer]}
                  </p>
                  <p className="mt-4 text-indigo-200">
                    {userAnswers[index] === question.correctAnswer
                      ? question.feedback.correct
                      : question.feedback.incorrect[userAnswers[index]]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-black bg-opacity-50 border-2 border-cyan-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-cyan-300">Question {currentQuestionIndex + 1}</CardTitle>
              <CardDescription className="text-xl text-pink-300">{currentQuestions[currentQuestionIndex].question}</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={selectedAnswer !== null ? selectedAnswer.toString() : ""} 
                onValueChange={(value) => handleAnswerSelection(parseInt(value))}
                className="space-y-4"
              >
                {currentQuestions[currentQuestionIndex].choices.map((choice, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-indigo-900 to-purple-900 hover:from-indigo-800 hover:to-purple-800 transition-colors duration-300">
                    <RadioGroupItem value={index.toString()} id={`answer-${index}`} className="text-pink-500" />
                    <Label htmlFor={`answer-${index}`} className="text-cyan-200 cursor-pointer">{choice}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleNextQuestion} 
                disabled={selectedAnswer === null}
                className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition duration-300 ease-in-out disabled:opacity-50"
              >
                {currentQuestionIndex === currentQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

export default QuizPanel

