import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getInitialUserState = () => {
    if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
};

const initialState = {
    user: getInitialUserState(),
    token: null,
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username: credentials.username,
                password: credentials.password,
                expiresInMins: 30
            });
            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data));
                return response.data;
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('user');
            state.user = null;
            state.token = null;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.username;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log("error: ", action.payload);
                state.loading = false;
                state.error = action.payload.message;
                console.log(state.error);
            });
    },
});

export const { logout, addUser } = authSlice.actions;

export default authSlice.reducer;

export const getServerSideProps = async () => {
    return {
        props: {},
        notFound: true,
    };
};
