const generateLicense = license => {
  switch (license) {
    case "MIT":
      return {
        badge: "![MIT](https://img.shields.io/badge/license-MIT-brightgreen)",
        description: "This software is licensed under the [MIT license](https://choosealicense.com/licenses/mit/)."
      }
    case "GNU GPLv3":
      return {
        badge: "![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-blue)",
        description: "This software is licensed under the [GNU GPLv3 license](https://choosealicense.com/licenses/gpl-3.0/)."
      }
    case "Mozilla 2.0":
      return {
        badge: "![Mozilla 2.0](https://img.shields.io/badge/license-Mozilla%202.0-orange)",
        description: "This software is licensed under the [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)."
      }
    case "Apache 2.0":
      return {
        badge: "![Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-yellow)",
        description: "This software is licensed under the [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)."
      }
    default:
      return {
        badge: "![Unlicensed](https://img.shields.io/badge/license-Unlicensed-red)",
        description: "This software is not available under any license and may not be copied, distributed, or modified."
      }
  }
}

const generateContribution = contribute => {
  if (contribute === "Contributor Covenant") {
    return `This project follows the guidelines of the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). If you are interested in contributing, please contact me at my email in the Questions section of this README.
    `
  } else return contribute;
}

const generateMarkdown = data => {

  const {title, description, installation, usage, license, contribute, tests, ...contact} = data;

  const licenseInfo = generateLicense(license);
  return `
  # ${title}
  ${licenseInfo.badge}

  ## Description

  ${description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  * 
  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## License

  ${licenseInfo.description}

  ## Contribution

  ${generateContribution(contribute)}

  ## Tests

  ${tests}

  ## Questions

  If you have any questions about this project, you can email me at ${contact.email}.
  
  For other projects, check out my [GitHub](https://github.com/${contact.username}).
`;
}

module.exports = generateMarkdown;