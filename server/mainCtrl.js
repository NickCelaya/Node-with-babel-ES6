let messages = [
    {
      name: "Darth Maul",
      age: 9090990
    },
    
  ];
  
  export const myName = (req,res) => {
    res.status(200).send(messages);
  }
  
  export const whatName = (req, res) => {
    const {name} = req.body
    const {age} = req.body
    if(name && age){
      messages.push(req.body)
      res.status(200).send(`User added Thanks for adding user`)
    } else if(!name && !age) {
      res.status(404).send(`Hi please add user`)
    }
  }
  