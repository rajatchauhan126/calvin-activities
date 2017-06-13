const mailboxes = [];
let idCounter = -1;

// Function to create a mailbox which contains id

function createMailbox(req, res) {
  const createNewMailBox = {
    id: (idCounter += 1).toString(),
  };

  mailboxes.push(createNewMailBox);
  return createNewMailBox;
}

function checkIfMailboxExists(id) {
  const filteruserid = mailboxes.filter(userid => userid.id === id);
  return filteruserid.length!==0;
}
// Function to delete the mailbox with id. If id not exists returns no mailbox error
function deleteMailbox(id) {
  const filteruserid = mailboxes.filter(userid => userid.id === id);
  const mailBoxIndex = mailboxes.indexOf(filteruserid[0]);
  const x = mailboxes.splice(mailBoxIndex, 1);
  return x[0];
}

module.exports = {
  createMailbox,
  deleteMailbox,
  checkIfMailboxExists,
};

