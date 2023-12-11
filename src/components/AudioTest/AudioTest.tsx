import React, { useEffect, useState } from "react";
import MessageModal from "../MessageModal/MessageModal";
import { ResultAnswerType } from "../../types/ResultAnswerType";

import AudioFile1 from "../../assets/audio/file_41252.mp3";
import AudioFile2 from "../../assets/audio/file_41253.mp3";
import AudioFile3 from "../../assets/audio/file_41254.mp3";
import AudioFile4 from "../../assets/audio/file_41255.mp3";

// Оголошення масиву з аудіофайлами
const AudioArr = [AudioFile1, AudioFile2, AudioFile3, AudioFile4];

// Тип для питань з аудіотесту
type AudioQuestion = {
  id: number;
  audioPath: string;
  correctAnswer: string;
};

// Тип пропсів для компонента AudioTest
type AudioTestProps = {
  onFinish: (results: ResultAnswerType[]) => void;
};

// Функціональний компонент AudioTest
const AudioTest: React.FC<AudioTestProps> = ({ onFinish }) => {
  // Стан для збереження питань з аудіотесту
  const [audioQuestionsList, setAudioQuestionsList] = useState<AudioQuestion[]>(
    []
  );

  // Стан для відстеження поточного питання
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  // Стан для збереження вибраних відповідей
  const [selectedAnswers, setSelectedAnswers] = useState<Array<string | null>>(
    Array(audioQuestionsList.length).fill(null)
  );

  // Стан для відстеження відкриття модального вікна
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  // Створення посилання на аудіо елемент
  const audioRef = React.createRef<HTMLAudioElement>();

  // Завантаження питань з аудіотесту при монтуванні компонента
  useEffect(() => {
    const fetchAudioQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/audio");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAudioQuestionsList(data);
      } catch (error) {
        console.error("Error fetching audio questions:", error);
      }
    };

    fetchAudioQuestions();
  }, []); // Залежності відсутні, запит виконається лише раз при монтуванні компонента

  // Функція для переходу до наступного питання
  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  // Функція для повернення до попереднього питання
  const prevQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  // Функція для обробки зміни відповіді
  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;
    setSelectedAnswers((prev) => {
      const newSelectedAnswers = [...prev];
      newSelectedAnswers[currentQuestion] = answer;
      return newSelectedAnswers;
    });
  };

  // Функція для завершення тесту
  const handleFinishTest = () => {
    if(selectedAnswers.length !== audioQuestionsList.length) {
      alert("Ви не відповіли на всі питання");
      return;
    }

    setIsConfirmationModalOpen(true);
  };

  // Функція для підтвердження завершення тесту
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
    setIsConfirmationModalOpen(false); // Закриття модального вікна після завершення тесту
  };

  // Поточне питання та шлях до аудіофайлу
  const question = audioQuestionsList[currentQuestion];
  const audioPath = AudioArr[currentQuestion];

  // Відображення "Loading..." поки не завантажаться дані
  if (audioQuestionsList.length === 0) {
    return <div>Loading...</div>;
  }

  // Повернення JSX елементу тесту
  return (
    <div className="test-element">
      <div>
        {/* Аудіо елемент з використанням ref для управління відтворенням */}
        <audio key={question.id} ref={audioRef} controls={true}>
          <source src={audioPath} type="audio/mp3" />
        </audio>

        {/* Відображення текстового поля для відповіді на аудіозапитання */}
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

      {/* Блок кнопок для переходу до наступного або попереднього питання */}
      <div className="test-buttons">
        <button onClick={prevQuestion} disabled={currentQuestion === 0}>
          Попереднє
        </button>

        {/* Умовний блок кнопок для управління відображенням кнопки "Наступне" або "Завершити тест" */}
        {currentQuestion + 1 !== audioQuestionsList.length ? (
          <button
            onClick={() => {
              audioRef.current?.pause(); // При переході до наступного питання зупиняємо аудіо
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

      {/* Модальне вікно для підтвердження завершення тесту */}
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

// Експорт компонента AudioTest
export default AudioTest;
