import {Request, Response } from 'express';
import EmamilService from '../services/emailservice';
import EmailService from '../services/emailservice';
const users = [
    {name: 'Diego', email: 'jonathasgoncalvespicoli@gmail.com'},
    {name: 'Jonathas', email: 'jonathasgoncalvespicoli@gmail.com'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create (req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Jonathas Gonçalves Picoli', 
                email: 'jonathas@gmail.com'
            },
           message:  { 
               subject: 'Bem vindo', 
               body: 'Olá Jonathas!'
            }
        });

        return res.send();
    }

    
};