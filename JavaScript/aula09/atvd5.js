for (let i = 2; i <= 20; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {
      console.log(i);
    }
  }