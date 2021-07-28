export const storeMock = {
  gameSettings: {
    showModal: false,
    startGame: false,
    gameCategories: [
      {
        id: 9,
        name: "General Knowledge",
      },
      {
        id: 10,
        name: "Entertainment: Books",
      },
      {
        id: 11,
        name: "Entertainment: Film",
      },
      {
        id: 12,
        name: "Entertainment: Music",
      },
      {
        id: 13,
        name: "Entertainment: Musicals & Theatres",
      },
      {
        id: 14,
        name: "Entertainment: Television",
      },
      {
        id: 15,
        name: "Entertainment: Video Games",
      },
      {
        id: 16,
        name: "Entertainment: Board Games",
      },
      {
        id: 17,
        name: "Science & Nature",
      },
      {
        id: 18,
        name: "Science: Computers",
      },
      {
        id: 19,
        name: "Science: Mathematics",
      },
      {
        id: 20,
        name: "Mythology",
      },
      {
        id: 21,
        name: "Sports",
      },
      {
        id: 22,
        name: "Geography",
      },
      {
        id: 23,
        name: "History",
      },
      {
        id: 24,
        name: "Politics",
      },
      {
        id: 25,
        name: "Art",
      },
      {
        id: 26,
        name: "Celebrities",
      },
      {
        id: 27,
        name: "Animals",
      },
      {
        id: 28,
        name: "Vehicles",
      },
      {
        id: 29,
        name: "Entertainment: Comics",
      },
      {
        id: 30,
        name: "Science: Gadgets",
      },
      {
        id: 31,
        name: "Entertainment: Japanese Anime & Manga",
      },
      {
        id: 32,
        name: "Entertainment: Cartoon & Animations",
      },
    ],
    playerNumber: 2,
    gameCategoryId: 9,
    questionNumber: "3",
    questionType: "multiple",
  },
  game: {
    game: {},
    questions: [
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "medium",
        question: "In 2013 how much money was lost by Nigerian scams?",
        correct_answer: "$12.7 Billion",
        incorrect_answers: [
          "$956 Million",
          "$2.7 Billion",
          "$12.7 Billion",
          "$95 Million",
        ],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "hard",
        question: "The Swedish word &quot;Grunka&quot; means what in English?",
        correct_answer: "Thing",
        incorrect_answers: ["People", "Place", "Pineapple"],
      },
      {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "hard",
        question: "How many notes are there on a standard grand piano?",
        correct_answer: "88",
        incorrect_answers: ["98", "108", "78"],
      },
    ],
    activeQuestion: 0,
    players: [
      {
        id: 27450,
        type: "human",
        name: "Me",
        score: 0,
        answers: [
          {
            questionNumber: 0,
            userAnswer: "",
            answerTime: 0,
          },
          {
            questionNumber: 1,
            userAnswer: "",
            answerTime: 0,
          },
          {
            questionNumber: 2,
            userAnswer: "",
            answerTime: 0,
          },
        ],
      },
      {
        id: 14220,
        type: "computer",
        name: "Player 1",
        score: 0,
        answers: [
          {
            questionNumber: 0,
            userAnswer: "",
            answerTime: 0,
          },
          {
            questionNumber: 1,
            userAnswer: "",
            answerTime: 0,
          },
          {
            questionNumber: 2,
            userAnswer: "",
            answerTime: 0,
          },
        ],
      },
    ],
    timer: 10,
  },
};
