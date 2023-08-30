import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  author: object ;
  content: string ;
  from: string;
  to: string ;
}

export interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages: [],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages, addMessage } = messageSlice.actions;

export default messageSlice.reducer;
