import { program } from 'commander';          // const{program} = require('commander');            require syntax
import {createTransport} from 'nodemailer';  //Modular import& export : targetting createTransport takes up only the needed code to reduce overall code size

//Create Email Transport
const transporter = createTransport({
    host:'smtppro.zoho.com',
    port: 465,
    secure: true,
    auth:{
        user:"admin@shopa.life",
        pass:"KqV7XsXwn5DK",
    }
})

program
    .option('-s', '--subject')
    .option('-t', '--to')
    .option('-m', '--message'); //chaining:means add on a code


program.parse();

const options = program.opts();
console.log(program.args);
console.log(options);
if (options.s && options.t && options.m) {
    //send email
    transporter.sendMail({
        from:'noreply@shopa.life',
        to: program.args[1],
        subject: program.args[0],
        text:program.args[2]
    })
    .then(console.log)
    .catch(console.log);
} else {
    console.log('Some options are missing');
}