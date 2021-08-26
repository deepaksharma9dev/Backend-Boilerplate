import express, {Application} from 'express';

const app:Application = express();

const array:number[] = [1,2,3]


const PORT:number = 5000;

app.listen(5000,()=>console.log('server is running'))