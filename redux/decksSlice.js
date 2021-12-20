import { createSlice } from "@reduxjs/toolkit";
export const decksSlice = createSlice({
  name: "decks",
  initialState: [
    {
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
    {
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
  ],

  reducers: {
    addDeck: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addDeck } = decksSlice.actions;

export default decksSlice.reducer;
