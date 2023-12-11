/*Цей код створює сервер, який прослуховує вказаний порт та надає
 доступ до даних з бази даних за допомогою RESTful API. */

//імпорт бібліотек
import express from "express";
import { connect, model } from "mongoose";
import cors from "cors";
/*
express: Це фреймворк для створення веб-серверів у Node.js.
mongoose: Об'єкт моделі та інструменти для взаємодії з MongoDB базою даних.
cors: Посередник Express для обробки Cross-Origin Resource Sharing (механізм веб-безпеки).
також вказується порт, на якому буде прослуховуватися сервер.*/
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Підключення до бази даних MongoDB
connect("mongodb://127.0.0.1:27017/DiPolish", {});
console.log("Connected to MongoDB:", connect.name);


/*наступна схема визначає модель таким чином,
 що вона має поля id (число), question (рядок) та answers (масив об'єктів). 
 Кожен об'єкт у масиві answers має поля option (рядок) і isCorrect (булеве значення).
 Ця модель використовується 
 для взаємодії з колекцією QuizQuestion у базі даних MongoDB. */

// Структура моделі для Quiz
const QuizQuestion = model("QuizQuestion", {
  id: { type: Number },
  question: { type: String },
  answers: [
    {
      option: { type: String },
      isCorrect: { type: Boolean },
    },
  ],
});

// Структура моделі для Multi
const MultiTestQuestion = model("MultiTestQuestion", {
  id: { type: Number },
  question: { type: String },
  answers: [
    {
      option: { type: String },
      isCorrect: { type: Boolean },
    },
  ],
});

// Структура моделі для Audio
const AudioQuestion = model("AudioQuestion", {
  id: { type: Number },
  audioPath: { type: String },
  correctAnswer: { type: String },
});

/*наступний код визначає HTTP GET-маршрут для шляху "/api/quiz". Коли на сервер надходить
GET-запит за цим шляхом, викликається функція обробки.
Маршрут для отримання даних Quiz*/
app.get("/api/quiz", async (req, res) => {
  try {
    /*використовується Mongoose для виклику методу find() 
    для моделі QuizTestQuestion. Це асинхронна операція, 
    тому використовується ключове слово await. В результаті 
    виконання отримується список питань типу "QuizQuestion" з бази даних. */
    const quizQuestionsList = await QuizQuestion.find();
    //Відправляє відповідь клієнту у форматі JSON, яка містить отриманий список питань типу "QuizQuestions".
    res.json(quizQuestionsList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Маршрут для отримання даних MultiTest
app.get("/api/multi", async (req, res) => {
  try {
    const multiTestQuestionsList = await MultiTestQuestion.find();
    res.json(multiTestQuestionsList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//Маршрут для отримання даних AudioTest

app.get("/api/audio", async (req, res) => {
  try {
    const audioQuestionsList = await AudioQuestion.find();
    res.json(audioQuestionsList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//якщо сервер запущено нам з'явиться таке повідомлення з посиланням на 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
