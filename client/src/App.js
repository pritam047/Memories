import React from 'react'
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'))
    
    return (
        // https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6

        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Container maxWidth="xl">
                    <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Navigate to="/posts" replace/>} />
                        <Route path="/posts" exact element={<Home />} />
                        <Route path="/posts/search" exact element={<Home />}  />
                        <Route path="/posts/:id" exact element={<PostDetails />} />
                        <Route path="/auth" element={user ? <Navigate to='/' replace/> : <Auth />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App;
