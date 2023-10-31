import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllUsersFromApi } from '../../services/bookManagementService'
import BookReader from '../../model/bookManagement/bookReader';
import BookReaderManagement from '../../model/bookManagement/bookReaderManagement';

const initialState : BookReaderManagement = {
        bookReaders: [],
        isLoading: false
}

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async () => {
        try {
            const response = await getAllUsersFromApi();
            return response.data as BookReader[];   
        } catch (error) {
        console.log(error);
    }
    return [] as BookReader[];
});

export const bookReadersManagementSlice = createSlice({
    name: 'bookReaderManagement',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
          // Add user to the state array
          state.bookReaders = action.payload;
          state.isLoading = false;
        });
        builder.addCase(getAllUsers.pending, (state, action) => {
            // Add user to the state array
            state.bookReaders = [];
            state.isLoading = true;
          });
      },
  })
  
  
  export default bookReadersManagementSlice.reducer