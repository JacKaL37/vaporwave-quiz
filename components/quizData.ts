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
  },
  {
    lessonName: "Vaporwave Music Production",
    lessonContent: `
# Crafting the Sound of Vaporwave

Vaporwave music production involves a unique blend of sampling, remixing, and original composition.

## Key Techniques

1. **Sampling**: Using snippets of 80s and 90s music, commercials, and other media.
2. **Tempo Adjustment**: Slowing down tracks to create a dreamy, nostalgic feel.
3. **Reverb and Echo**: Adding effects to enhance the ethereal quality of the music.
4. **Looping**: Repeating sections to create hypnotic patterns.

Explore these techniques to create your own vaporwave tracks!
    `,
    lessonQuiz: {
      questions: [
        {
          question: "What is a common source for samples in vaporwave music?",
          choices: ["Classical music", "80s and 90s media", "Modern pop songs", "Jazz records"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Vaporwave often samples 80s and 90s media.",
            incorrect: [
              "Classical music isn't typically sampled in vaporwave.",
              "Modern pop songs are too current for vaporwave's nostalgic focus.",
              "Jazz records aren't a common source for vaporwave samples."
            ]
          }
        },
        {
          question: "What effect is commonly used to create a dreamy feel in vaporwave music?",
          choices: ["Distortion", "Reverb", "Flanger", "Chorus"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Reverb is commonly used to create a dreamy, ethereal feel.",
            incorrect: [
              "Distortion is too harsh for vaporwave's dreamy aesthetic.",
              "Flanger isn't as commonly used as reverb in vaporwave.",
              "Chorus can be used, but reverb is more central to the vaporwave sound."
            ]
          }
        },
        {
          question: "What is the purpose of slowing down tracks in vaporwave?",
          choices: ["To increase energy", "To create a nostalgic feel", "To make the music louder", "To add complexity"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Slowing down tracks creates a nostalgic, dreamy feel.",
            incorrect: [
              "Slowing down tracks actually decreases energy.",
              "Making the music louder isn't the goal of slowing down tracks.",
              "Slowing down tracks simplifies rather than adds complexity."
            ]
          }
        },
        {
          question: "Which technique involves repeating sections of music?",
          choices: ["Sampling", "Looping", "Pitch shifting", "Compression"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Looping involves repeating sections to create hypnotic patterns.",
            incorrect: [
              "Sampling involves using snippets of other media, not necessarily repeating them.",
              "Pitch shifting changes the pitch, not the repetition.",
              "Compression affects the dynamic range, not the repetition."
            ]
          }
        },
        {
          question: "Which effect is often added to enhance the ethereal quality of vaporwave music?",
          choices: ["Distortion", "Echo", "Overdrive", "Phaser"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Echo is often added to enhance the ethereal quality.",
            incorrect: [
              "Distortion is too harsh for vaporwave's ethereal quality.",
              "Overdrive is more suited to rock music than vaporwave.",
              "Phaser can be used, but echo is more central to the vaporwave sound."
            ]
          }
        }
      ]
    }
  },
  {
    lessonName: "Vaporwave Fashion",
    lessonContent: `
# Dressing the Part

Vaporwave fashion is a unique blend of retro and futuristic styles, often incorporating elements from the 80s and 90s.

## Key Elements

1. **Neon Colors**: Bright pinks, purples, and blues.
2. **Retro Clothing**: Windbreakers, high-waisted jeans, and graphic tees.
3. **Futuristic Accessories**: Sunglasses, holographic materials, and metallic accents.
4. **Mix of Eras**: Combining elements from different decades to create a unique look.

Explore these elements to create your own vaporwave-inspired outfits!
    `,
    lessonQuiz: {
      questions: [
        {
          question: "Which color is most associated with vaporwave fashion?",
          choices: ["Neon Green", "Bright Pink", "Deep Red", "Navy Blue"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Bright pink is one of the most iconic colors in vaporwave fashion.",
            incorrect: [
              "While neon colors are used, green isn't as common as pink or blue.",
              "Deep red isn't typically associated with vaporwave's bright palette.",
              "Navy blue is too dark for vaporwave's neon and pastel aesthetic."
            ]
          }
        },
        {
          question: "What type of clothing is commonly seen in vaporwave fashion?",
          choices: ["Windbreakers", "Suits", "Formal dresses", "Tuxedos"],
          correctAnswer: 0,
          feedback: {
            correct: "Correct! Windbreakers are a common element in vaporwave fashion.",
            incorrect: [
              "Suits are too formal for vaporwave's casual, retro style.",
              "Formal dresses aren't typically seen in vaporwave fashion.",
              "Tuxedos are too formal for vaporwave's casual, retro style."
            ]
          }
        },
        {
          question: "What type of accessories are often used in vaporwave fashion?",
          choices: ["Pearl necklaces", "Sunglasses", "Leather belts", "Gold watches"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Sunglasses, especially with futuristic designs, are common in vaporwave fashion.",
            incorrect: [
              "Pearl necklaces are too traditional for vaporwave's futuristic style.",
              "Leather belts aren't a key element in vaporwave fashion.",
              "Gold watches are too traditional for vaporwave's futuristic style."
            ]
          }
        },
        {
          question: "Which material is often used in vaporwave fashion for a futuristic look?",
          choices: ["Denim", "Holographic materials", "Cotton", "Wool"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Holographic materials are often used for a futuristic look.",
            incorrect: [
              "Denim is more associated with traditional styles than vaporwave.",
              "Cotton is too plain for vaporwave's flashy aesthetic.",
              "Wool is too traditional for vaporwave's futuristic style."
            ]
          }
        },
        {
          question: "Vaporwave fashion often combines elements from which decades?",
          choices: ["50s and 60s", "70s and 80s", "80s and 90s", "90s and 2000s"],
          correctAnswer: 2,
          feedback: {
            correct: "Correct! Vaporwave fashion often combines elements from the 80s and 90s.",
            incorrect: [
              "The 50s and 60s are too early for vaporwave's aesthetic.",
              "While the 70s and 80s are close, vaporwave focuses more on the 80s and 90s.",
              "The 90s and 2000s are too recent for vaporwave's nostalgic focus."
            ]
          }
        }
      ]
    }
  },
  {
    lessonName: "Vaporwave Philosophy",
    lessonContent: `
# The Ideas Behind the Aesthetic

Vaporwave isn't just about visuals and music; it also has a philosophical component that critiques modern society.

## Key Concepts

1. **Nostalgia**: A longing for the past, especially the 80s and 90s.
2. **Critique of Consumerism**: Questioning the impact of consumer culture.
3. **Simulacra and Simulation**: Exploring the blurred lines between reality and representation.
4. **Digital Decay**: Embracing the imperfections of digital media.

Explore these concepts to understand the deeper meaning behind vaporwave.
    `,
    lessonQuiz: {
      questions: [
        {
          question: "What era does vaporwave nostalgia primarily focus on?",
          choices: ["50s and 60s", "70s and 80s", "80s and 90s", "90s and 2000s"],
          correctAnswer: 2,
          feedback: {
            correct: "Correct! Vaporwave nostalgia primarily focuses on the 80s and 90s.",
            incorrect: [
              "The 50s and 60s are too early for vaporwave's nostalgic focus.",
              "While the 70s and 80s are close, vaporwave focuses more on the 80s and 90s.",
              "The 90s and 2000s are too recent for vaporwave's nostalgic focus."
            ]
          }
        },
        {
          question: "What aspect of society does vaporwave often critique?",
          choices: ["Industrial production", "Consumer culture", "Political systems", "Educational institutions"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Vaporwave often critiques consumer culture.",
            incorrect: [
              "While industrial production might be touched upon, consumer culture is more central to vaporwave.",
              "Political systems aren't a primary focus of vaporwave's critique.",
              "Educational institutions aren't typically a subject in vaporwave art or music."
            ]
          }
        },
        {
          question: "What philosophical concept explores the blurred lines between reality and representation?",
          choices: ["Existentialism", "Simulacra and Simulation", "Utilitarianism", "Deontology"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Simulacra and Simulation explores the blurred lines between reality and representation.",
            incorrect: [
              "Existentialism focuses on individual existence and meaning.",
              "Utilitarianism is about maximizing happiness and minimizing suffering.",
              "Deontology is about following moral rules and duties."
            ]
          }
        },
        {
          question: "What term describes the embrace of imperfections in digital media?",
          choices: ["Digital perfection", "Digital decay", "Digital enhancement", "Digital clarity"],
          correctAnswer: 1,
          feedback: {
            correct: "Correct! Digital decay describes the embrace of imperfections in digital media.",
            incorrect: [
              "Digital perfection is the opposite of embracing imperfections.",
              "Digital enhancement focuses on improving digital media, not embracing its flaws.",
              "Digital clarity is about clear and precise digital media, not its imperfections."
            ]
          }
        },
        {
          question: "What is a common theme in vaporwave's critique of consumer culture?",
          choices: ["Environmental impact", "Economic inequality", "Overconsumption", "Political corruption"],
          correctAnswer: 2,
          feedback: {
            correct: "Correct! Overconsumption is a common theme in vaporwave's critique of consumer culture.",
            incorrect: [
              "While environmental impact might be touched upon, overconsumption is more central to vaporwave.",
              "Economic inequality isn't a primary focus of vaporwave's critique.",
              "Political corruption isn't typically a subject in vaporwave art or music."
            ]
          }
        }
      ]
    }
  }
]

