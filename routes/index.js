import { Router } from 'express';

const router = Router();

// Home route
router.get('/home', (req, res) => {
    res.render('home');
});

// About route
router.get('/about', (req, res) => {
    res.render('about');
});

// Index route
router.get('/', (req, res) => {
    res.render('index');
});

// Profile route
router.get('/profile', (req, res) => {
    const user = {
        first_name: 'John',
        last_name: 'Doe',
    };
    res.render('profile', { title: 'Profile', user });
});

export default router;
