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
      const { deckID, ...rest } = action.payload;
      state[deckID].questions.push(rest);
    },
    deleteDeck: (state, action) => {
      console.log("deleted-->");
      console.log(action.payload.id);
      //delete state[action.payload.id];
    },
  },
});

export const { addDeck, addQuestion, deleteDeck } = decksSlice.actions;
export default decksSlice.reducer;
