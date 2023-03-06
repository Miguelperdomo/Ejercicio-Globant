const fs = require('fs');

fs.readFile('base.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const users = data.split('\n\n');

  for (let user of users) {
    const dataDict = {};

    
    const data = user.trim().split(/\s+/);

    for (let item of data) {
      const [key, value] = item.split(':');
      dataDict[key] = value;
    }


    const requiredFields = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];
    let isValid = true;

    for (let field of requiredFields) {
      if (!(field in dataDict)) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      console.log(`${dataDict.usr} is a invalid user`);
    }
  }
});