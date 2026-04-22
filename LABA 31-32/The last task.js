function readFileMock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello world. This is file content.");
    }, 2000);
  });
}

async function processFile() {
  try {
    console.log("Читання файлу...");

    const content = await readFileMock();

    console.log("Вміст файлу:", content);

    // обробка вмісту (наприклад підрахунок слів)
    const wordsCount = content.split(" ").length;

    console.log("Кількість слів:", wordsCount);

  } catch (error) {
    console.log("Помилка:", error);
  }
}

processFile();