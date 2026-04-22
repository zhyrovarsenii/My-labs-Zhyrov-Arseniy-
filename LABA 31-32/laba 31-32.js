function fakeServerRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({
          status: 200,
          data: {
            id: 1,
            name: "Arseniy",
            role: "student"
          }
        });
      } else {
        reject({
          status: 500,
          message: "Server error"
        });
      }
    }, 2000);
  });
}

// використання
fakeServerRequest()
  .then(response => {
    console.log("Успіх:", response);
  })
  .catch(error => {
    console.log("Помилка:", error);
  });