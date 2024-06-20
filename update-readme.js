const fs = require('fs');
const axios = require('axios');

async function updateReadme() {
  try {
    const response = await axios.get('http://numbersapi.com/random/math');
    const funFact = response.data;

    const readmePath = 'README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    // Replace the placeholder with the fetched fun fact
    readmeContent = readmeContent.replace(
      /<!-- FUN_FACT_PLACEHOLDER -->/,
      `### Daily Fun Fact 🌟\n\n${funFact}`
    );

    fs.writeFileSync(readmePath, readmeContent, 'utf-8');
  } catch (error) {
    console.error('Error fetching or updating README:', error.message);
  }
}

updateReadme();
