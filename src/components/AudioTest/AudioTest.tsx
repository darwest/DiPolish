import React, { useEffect, useState } from "react";
import MessageModal from "../MessageModal/MessageModal";
import { ResultAnswerType } from "../../types/ResultAnswerType";

import AudioFile1 from "../../assets/audio/file_41252.mp3";
import AudioFile2 from "../../assets/audio/file_41253.mp3";
import AudioFile3 from "../../assets/audio/file_41254.mp3";
import AudioFile4 from "../../assets/audio/file_41255.mp3";

const AudioArr = [AudioFile1, AudioFile2, AudioFile3, AudioFile4];

type AudioQuestion = {
  id: number;
  correctAnswer: string;
};

type AudioTestProps = {
  onFinish: (results: ResultAnswerType[]) => void;
};

const AudioTest: React.FC<AudioTestProps> = ({ onFinish }) => {
  const [audioQuestionsList, setAudioQuestionsList] = useState<AudioQuestion[]>([
    { "id": 1, "correctAnswer": "się" },
    { "id": 2, "correctAnswer": "pan" },
    { "id": 3, "correctAnswer": "w porządku" },
    { "id": 4, "correctAnswer": "nazywa" },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Array<string | null>>(
    Array(audioQuestionsList.length).fill(null)
  );
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const audioRef = React.createRef<HTMLAudioElement>();

  useEffect(() => {
    // Немає потреби викликати сервер для отримання питань, оскільки дані вже включені в код
  }, []);

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;
    setSelectedAnswers((prev) => {
      const newSelectedAnswers = [...prev];
      newSelectedAnswers[currentQuestion] = answer;
      return newSelectedAnswers;
    });
  };

  const handleFinishTest = () => {
    if (selectedAnswers.length !== audioQuestionsList.length) {
      alert("Ви не відповіли на всі питання");
      return;
    }

    setIsConfirmationModalOpen(true);
  };

  const confirmFinishTest = () => {
    const results: Array<ResultAnswerType> = [];

    audioQuestionsList.forEach((el, index) => {
      const selectedAnswerIndex = selectedAnswers[index];

      if (selectedAnswerIndex !== null) {
        const isCorrect = el.correctAnswer === selectedAnswerIndex;

        results.push({
          id: el.id,
          correctAnswer: el.correctAnswer,
          inCorrectAnswer: isCorrect ? "" : selectedAnswerIndex,
          className: isCorrect ? "result-correct" : "result-incorrect",
          type: "audio",
        });
      }
    });

    onFinish(results);
    setIsConfirmationModalOpen(false);
  };

  const question = audioQuestionsList[currentQuestion];
  const audioPath = AudioArr[currentQuestion];

  if (audioQuestionsList.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="test-element">
      <div>
        <audio key={question.id} ref={audioRef} controls={true}>
          <source src={audioPath} type="audio/mp3" />
        </audio>

        <div className="test-audio-text">
          <label htmlFor="testAudio">{question.id})</label>
          <input
            className="test-audio-input"
            id="testAudio"
            type="text"
            value={selectedAnswers[currentQuestion] || ""}
            onChange={handleAnswerChange}
          />
        </div>
      </div>

      <div className="test-buttons">
        <button onClick={prevQuestion} disabled={currentQuestion === 0}>
          Попереднє
        </button>

        {currentQuestion + 1 !== audioQuestionsList.length ? (
          <button
            onClick={() => {
              audioRef.current?.pause();
              nextQuestion();
            }}
            disabled={currentQuestion === audioQuestionsList.length - 1}
          >
            Наступне
          </button>
        ) : (
          <button className="test-btn-next" onClick={handleFinishTest}>
            Завершити тест
          </button>
        )}
      </div>

      <MessageModal
        isOpen={isConfirmationModalOpen}
        onRequestClose={() => setIsConfirmationModalOpen(false)}
        contentLabel="Confirmation"
        message="Ви справді готові завершити тест?"
        onConfirm={confirmFinishTest}
        onCancel={() => setIsConfirmationModalOpen(false)}
      />
    </div>
  );
};

export default AudioTest;
