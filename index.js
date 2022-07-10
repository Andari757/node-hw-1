const fs = require("fs/promises");

const fileOperation = async (path, action, data) => {
    switch (action) {
        case "read":
            const contacts = await fs.readFile(path, 'utf-8');
            console.log(contacts)
            break;
        case "add":
            const result = await fs.appendFile(path, data);
            console.log(result)
            break;
        default:
            console.log("unknown action")
    }
}
fileOperation("./db/contacts.json", "read");
// fileOperation("./db/contacts.json", "add", "baba");
module.exports = fileOperation