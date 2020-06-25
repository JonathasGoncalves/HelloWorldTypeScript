import {Request, Response } from 'express';

const users = [
    {name: 'Diego', email: 'jonathasgoncalvespicoli@gmail.com'}
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
};