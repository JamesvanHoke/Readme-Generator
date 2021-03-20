// Generates a badge that matches our license, or an empty string if we don't have one.
function renderLicenseBadge(data) {
  switch (data) {
    case "GPL":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;

    case "Apache":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "BSD":
      badge =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;

    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "None":
      badge= ""
      break;
  } return badge
}


//if we have a license, adds the relevant link to our table of contents, else an empty string
function renderLicenseLink(data) {
  if (data !== "None") {
    return "* [License](#license)";
  } else {
    return "";
  }
}

// if we have a license, adds the relevant section header
function renderLicenseSection(data) {
  console.log(data)
  if (data !== "None") {
    return "## License";
  } else {
    return "";
  }
}

// if we have a license, adds the relevant section body
function renderLicenseSectionBody(data) {
  if (data !== "None") {
    return `This software is distributed with ${data}`;
  } else {
    return "";
  }
}

// plugs all of our data into our template.
function generateMarkdown(data) {

  return `${renderLicenseBadge(data.license)}
# ${data.projectTitle}
         
## Description
${data.projDesc}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Contribute](#contribute)
* [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
${data.installDesc}

## Usage
${data.usage}

## Testing
${data.test}

## Contribute
${data.contribution} 

## Questions
If you have any questions about the application contact me through my Github @${
    data.gitHubUsername
  } or through my email ${data.email}. 

${renderLicenseSection(data.license)}
${renderLicenseSectionBody(data.license)}
`;
}

//exports the main function.
module.exports = generateMarkdown;
