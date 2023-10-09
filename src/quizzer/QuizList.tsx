import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuizCard } from "./QuizCard";
import "./QuizList.css";
import { QuizView } from "./QuizView";

export const QuizList = ({
    quizzes,
    editQuiz,
    deleteQuiz,
    showModal
}: { quizzes: Quiz[]; editQuiz: (qId: number, newQuiz: Quiz) => void; deleteQuiz: (qId: number) => void; showModal: () => void; }) => {
    // FIX above - add prop types
    const [displayId, setDisplayId] = useState<null | number>(null);

    const handleQuizView = (id: number): void => {
        setDisplayId(id);
    };

    const resetQuizView = (): void => {
        setDisplayId(null);
    };

    return (
        <div className="quiz_list">
            {!displayId && (
                <>
                    {quizzes.map((quiz: Quiz): JSX.Element => (
                        <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                            handleClick={handleQuizView}
                        ></QuizCard>
                    ))}
                    <Button className="add_btn" onClick={showModal}>
                        Add New Quiz
                    </Button>
                </>
            )}
            {quizzes.map((quiz: Quiz): JSX.Element | null => {
                if (displayId === quiz.id) {
                    return (
                        <QuizView
                            key={quiz.id}
                            quiz={quiz}
                            editQuiz={editQuiz}
                            deleteQuiz={deleteQuiz}
                            resetView={resetQuizView}
                        ></QuizView>
                    );
                }
                return null;
            })}
        </div>
    );
};
