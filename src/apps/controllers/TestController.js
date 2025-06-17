exports.Test = (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  //   const tpl = "<h1>Welcome NodeJS</h1>";
  //   return res.send(tpl);
};
exports.Form = (req, res) => {
  return res.send(`
    <form method="post">
        <input type=text name=email>
        <br>
        <input type=password name=password>
        <br>
        <button type=submit>Send</button>
    </form>
  `);
};
