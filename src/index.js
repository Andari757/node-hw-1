const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
const { Command } = require("commander");


const program = new Command();
program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");


program.parse(process.argv);
const argv = program.opts();


const invokeAction = ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list": {
            listContacts().then(contacts => console.log(contacts));
            break;
        }
        case "get": {
            getContactById(id).then(contact => console.log(contact));
            break;
        }
        case "add": {
            addContact(name, email, phone).then(() => console.log('Contact successfully added.'));
            break;
        }
        case "remove": {
            removeContact(id).then(() => console.log('Contact successfully removed.'));;
            break;
        }
        default: {
            console.warn("Unknown action type!");
        }
    }
}

invokeAction(argv);
