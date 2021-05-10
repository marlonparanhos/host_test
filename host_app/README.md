## Demo
You can access a demo example by clicking [here](https://host-test-nine.vercel.app/)

## Running the project
You’ll need to have a pack manager in your machine, such as [NPM](https://nodejs.org/en/) or [Yarn](https://yarnpkg.com/) running on your machine. To execute a project, run:

```
$ npm install react-multi-carousel --save

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
```
## Downloading the project locally
If you already have Git installed, you can run:
```
$ git clone https://github.com/marlonparanhos/host_test.git
```
Navigate to source code directory, then run:
```
$ npm install

or if you're using Yarn:

$ yarn
```

After all depencies has been installed, you can run the project by executing:
```
$ npm start

or if you're using Yarn:

$ yarn start
```

If you do not have Git yet, you can follow these instructions:
### Install Git on Windows
1. Navigate to the latest [Git for Windows installer](https://gitforwindows.org/) and download the latest version.
2. Once the installer has started, follow the instructions as provided in the Git Setup wizard screen until the installation is complete.
3. Open the windows command prompt (or Git Bash if you selected not to use the standard Git Windows Command Prompt during the Git installation).
4. Type git version to verify Git was installed.

**Note: git-scm is a popular and recommended resource for downloading Git for Windows. The advantage of downloading Git from git-scm is that your download automatically starts with the latest version of Git included with the recommended command prompt, Git Bash . The download source is the same [Git for Windows installer](https://gitforwindows.org/) as referenced in the steps above.**

### Install Git on Mac
Most versions of MacOS will already have Git installed, and you can activate it through the terminal with git version. However, if you don't have Git installed for whatever reason, you can install the latest version of Git using one of several popular methods as listed below:

1. Navigate to the latest [macOS Git Installer](https://sourceforge.net/projects/git-osx-installer/files/git-2.23.0-intel-universal-mavericks.dmg/download?use_mirror=autoselect) and download the latest version.
2. Once the installer has started, follow the instructions as provided until the installation is complete.
3. Open the command prompt "terminal" and type git version to verify Git was installed.

**Note: git-scm is a popular and recommended resource for downloading Git on a Mac. The advantage of downloading Git from git-scm is that your download automatically starts with the latest version of Git. The download source is the same macOS Git Installer as referenced in the steps above.**

### Install Git on Linux
You can install Git on Linux through the package management tool that comes with your distribution.

1. Git packages are available using apt.
2. It's a good idea to make sure you're running the latest version. To do so, Navigate to your command prompt shell and run the following command to make sure everything is up-to-date: sudo apt-get update.
3. To install Git, run the following command: sudo apt-get install git-all.
4. Once the command output has completed, you can verify the installation by typing: git version.

**Note: You can download the proper Git versions and read more about how to install on specific Linux systems, like installing Git on Ubuntu or Fedora, in git-scm's documentation.**

## Extras utilizados

- Stylelint: utilizado para auxiliar na correção e padronização da sixtaxe das folhas de estilo
- Axios: utilizado para consumir os dados pela API disponibilizada e alimentar o aplicação com dados reais
- SASS: Utilizado por ser mais mais ágil e prático na construção de estilo para a aplicação
- Animações e efeitos: Efeitos de hover e trasições feitos utilizando keyframes através do SASS
