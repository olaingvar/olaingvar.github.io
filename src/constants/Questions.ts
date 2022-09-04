interface Question {
  question: string;
  answer: boolean;
}

const QUESTIONS: Question[] = [
  {
    question: "Är personen väldigt stilmedveten?",
    answer: true,
  },
  {
    question: "Har personen en titel med hög status?",
    answer: true,
  },
  {
    question:
      "Påstår sig personen representera en myndighet, ett stort företag eller en bank?",
    answer: true,
  },
  {
    question: "Är personen ovanligt charmig?",
    answer: true,
  },
  {
    question: "Hänvisar personen till en auktoritet i utlandet?",
    answer: true,
  },
  {
    question: "Använder personen ofta liknelser i sitt språk?",
    answer: true,
  },
  {
    question:
      "Har personen ofta ett kategoriskt språk, till exempel ”världens främsta”?",
    answer: true,
  },
  {
    question:
      "Påstår personen sig ha tillgång till unik kunskap eller unika metoder?",
    answer: true,
  },
  {
    question: "Behöver personen dina personuppgifter?",
    answer: true,
  },
  {
    question: "Är det ont om tid?",
    answer: true,
  },
  {
    question: "Är det ovanliga betalningsförhållanden involverade?",
    answer: true,
  },
  {
    question: "Behöver personen din hjälp med en transaktion?",
    answer: true,
  },
  {
    question: "Pratar personen om ett unikt tillfälle?",
    answer: true,
  },
];

export default QUESTIONS;
