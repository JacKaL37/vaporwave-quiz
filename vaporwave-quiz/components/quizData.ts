export interface QuizQuestion {
  question: string;
  choices: string[];
  correctAnswer: number;
  feedback: {
    correct: string;
    incorrect: string[];
  };
}

export interface Lesson {
  lessonName: string
  lessonContent: string
  lessonQuiz?: {
    questions: QuizQuestion[]
  }
}

export const lessons: Lesson[] = [
  {
    lessonName: "Vaporwave Cultural History",
    lessonContent: `
# Welcome to the Retro Future

Dive into a world where the past meets the future, and neon dreams become digital reality.

## The Birth of Vaporwave

Vaporwave emerged in the early 2010s as a microgenre of electronic music and an art movement. 
It's characterized by a fascination with retro cultural aesthetics, particularly the 1980s and 1990s.

## Key Characteristics

- Nostalgia for the recent past
- Critique of consumer capitalism
- Appropriation and remixing of corporate media

Explore the depths of vaporwave aesthetics, where every pixel tells a story of nostalgia and innovation.
    `,
    lessonQuiz: {
      questions: [
        {
          question: "In which decade did vaporwave emerge as a genre and art movement?",
          choices: ["1990s", "2000s", "2010s", "2020s"],
          correctAnswer: 2,
          feedback: {
            correct: "Correct! Vaporwave emerged in the early 2010s.",
            incorrect: [
              "The 1990s were an inspiration for vaporwave, but not when it emerged.",
              "Vaporwave emerged later than the 2000s.",
              "Vaporwave had already been established before the 2020s."
            ]
          }
        },
        {
          question: "Which of these is NOT a key characteristic of vaporwave?",
          choices: ["Nostalgia for the recent past", "Critique of consumer capitalism", "Emphasis on live performances", "Appropriation of corporate media"],
          correctAnswer: 2,
          feedback: {
            correct: "Correct! Vaporwave is primarily a studio-based genre and doesn't emphasize live performances.",
            incorrect: [
              "Nostalgia, especially for the 80s and 90s, is a core aspect of vaporwave.",
              "Vaporwave often includes critique or parody of consumer culture.",
              "Vaporwave frequently appropriates and remixes corporate media and logos."
            ]
          }
        },
        {
          question: "What time period does vaporwave typically romanticize?",
          choices: ["1950s-1960s", "1970s-1980s", "1980s-1990s", "2000s-2010s"],
          correctAnswer: 2,
          feedback: {
            correct: "Correct! Vaporwave typically romanticizes the 1980s and 1990s.",
            incorrect: [
              "The 1950s-1960s are too early for vaporwave's typical aesthetic.",
              "While the 1980s are included, vaporwave also heavily features 1990s aesthetics.",
              "The 2000s-2010s are too recent for vaporwave's nostalgic focus."
            ]
          }
        },
        {
          question: "Which of these technologies is most closely associated with vaporwave aesthetics?",
          choices: ["Vinyl records", "VHS tapes", "8-track tapes", "Blu-ray discs"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! VHS tapes are closely associated with vaporwave aesthetics, representing 80s-90s media technology.",
            incorrect: [
              "While vinyl has seen a resurgence, it's not as closely tied to vaporwave as VHS.",
              "8-track tapes are a bit too old for vaporwave's 80s-90s focus.",
              "Blu-ray discs are too modern for vaporwave's nostalgic aesthetic."
            ]
          }
        },
        {
          question: "What aspect of capitalism does vaporwave often critique or parody?",
          choices: ["Industrial production", "Consumer culture", "Stock markets", "Labor unions"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Vaporwave often critiques or parodies consumer culture.",
            incorrect: [
              "While industrial production might be touched upon, consumer culture is more central to vaporwave.",
              "Stock markets aren't a primary focus of vaporwave's critique.",
              "Labor unions aren't typically a subject in vaporwave art or music."
            ]
          }
        }
      ]
    }
  },
  {
    lessonName: "Vaporwave Visual Aesthetics",
    lessonContent: `
# The Look of Vaporwave

Vaporwave's visual aesthetic is as crucial to the movement as its sound. It's a unique blend of 
retro and futuristic elements, creating a dreamlike, nostalgic atmosphere.

## Key Visual Elements

1. **Color Palette**: Dominated by pastel pinks, purples, and blues, often with neon accents.
2. **Retro Technology**: VHS tapes, old computers, and early internet imagery.
3. **Classical Statuary**: Greek and Roman busts are frequently incorporated.
4. **Glitch Art**: Intentional digital artifacts and distortions.

## Typography

Vaporwave often uses a mix of English and Japanese characters, with a preference for 
serif fonts and stylized, chrome-like text effects.

Explore these visual elements to create your own vaporwave-inspired designs!
    `,
    lessonQuiz: {
      questions: [
        {
          question: "Which color is most associated with vaporwave aesthetics?",
          choices: ["Neon Green", "Pastel Pink", "Deep Red", "Navy Blue"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Pastel pink is one of the most iconic colors in vaporwave aesthetics.",
            incorrect: [
              "While neon colors are used in vaporwave, green isn't as common as pink or blue.",
              "Deep red isn't typically associated with vaporwave's pastel and neon palette.",
              "While blue is used in vaporwave, it's usually a lighter or neon shade rather than navy."
            ]
          }
        },
        {
          question: "What type of ancient art is often incorporated into vaporwave visuals?",
          choices: ["Egyptian hieroglyphs", "Greek and Roman statuary", "Celtic knots", "Chinese calligraphy"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Greek and Roman statuary, especially busts, are frequently used in vaporwave art.",
            incorrect: [
              "While interesting, Egyptian hieroglyphs aren't a common element in vaporwave.",
              "Celtic knots don't fit with vaporwave's focus on classical and 80s-90s aesthetics.",
              "While Japanese text is common in vaporwave, Chinese calligraphy specifically isn't a key element."
            ]
          }
        },
        {
          question: "What technique is often used to create a sense of digital decay in vaporwave art?",
          choices: ["Glitch art", "Watercolor effects", "Pencil sketching", "Oil painting techniques"],
          correctAnswer: 0,
          feedback: {
            correct: "Correct! Glitch art, creating intentional digital artifacts and distortions, is a key technique in vaporwave visuals.",
            incorrect: [
              "Watercolor effects are too traditional and analog for vaporwave's digital aesthetic.",
              "Pencil sketching is too traditional for vaporwave's digital, retro-futuristic look.",
              "Oil painting techniques are too classical for vaporwave's digital aesthetic."
            ]
          }
        },
        {
          question: "Which of these technologies would you most likely see in a vaporwave image?",
          choices: ["Modern smartphone", "VHS tape", "Gramophone", "Electric car"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! VHS tapes, representing 80s-90s technology, are a common element in vaporwave imagery.",
            incorrect: [
              "Modern smartphones are too current for vaporwave's retro aesthetic.",
              "Gramophones are too old for vaporwave's focus on 80s-90s nostalgia.",
              "Electric cars, especially modern ones, don't fit vaporwave's retro tech aesthetic."
            ]
          }
        },
        {
          question: "In vaporwave typography, which language is often mixed with English?",
          choices: ["French", "Spanish", "Japanese", "German"],
          correctAnswer: 2,
          feedback: {
            correct: "Correct! Japanese characters are often mixed with English in vaporwave typography.",
            incorrect: [
              "French isn't typically used in vaporwave typography.",
              "Spanish isn't commonly used in vaporwave visuals.",
              "German isn't a language typically associated with vaporwave aesthetics."
            ]
          }
        }
      ]
    }
  }
]

