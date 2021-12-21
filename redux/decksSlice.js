import { createSlice } from "@reduxjs/toolkit";
export const decksSlice = createSlice({
  name: "decks",
  initialState: {
    1654: {
      id: 1654,
      title: "React",
      questions: [
        {
          id: 1354,
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          id: 8951,
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    9568: {
      id: 9568,
      title: "JavaScript",
      questions: [
        {
          id: 6549,
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared.",
        },
      ],
    },
  },

  reducers: {
    addDeck: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    addQuestion: (state, action) => {
      console.log("action.payload------->");
      console.log(action.payload);
      console.log("state");
      console.log(state);
      // state[deckId].questions.push(action.payload);
    },
  },
});

export const { addDeck } = decksSlice.actions;
export const { addQuestion } = decksSlice.actions;
export default decksSlice.reducer;
