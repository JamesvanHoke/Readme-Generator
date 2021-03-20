let badge = "";
let licenseLink = "";
let licenseSection = "";
let licenseSectionBody = "";
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

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
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseLink = "* [License](#license)";
  return licenseLink;
}

function renderLicenseSection(data) {
  let licenseSection = "## License";
  let licenseSectionBody = `This software is distributed with the ${data} license`
  return licenseSection, licenseSectionBody
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.license !== "None") {
    renderLicenseBadge(data.license);
    renderLicenseLink(data.license);
    renderLicenseSection(data.license);
  }
  const generatedMD = 
`${badge}
# ${data.projectTitle}
         
## Description
${data.projDesc}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Contribute](#contribute)
* [Questions](#questions)
${licenseLink}

## Installation
${data.installDesc}

## Usage
${data.usage}

## Testing
${data.test}

## Contribute
${data.contribution} 

## Questions
If you have any questions about the application contact me through my Github <a href="https://github.com/${data.gitHubUsername}">${data.gitHubUsername} or through my email ${data.email}. 
${licenseSection}
${licenseSectionBody}
`;
  return generatedMD;
}

module.exports = generateMarkdown;
