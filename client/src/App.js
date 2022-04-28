import React from 'react'
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const App = () => {

    return (
        // https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6

        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/auth" element={<Auth />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App;
