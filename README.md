# README Generator

## Description

This is a quick generator for README markdown files using NodeJS. Users will need inquirer in NodeJS to run the prompts. 
It will ask for name, email and GitHub usernames. The prompts will also ask for information about the project like title, description, installation, usage, license, contribution and tests instructions. 
Once completed, the generator will take the answers and generate them into a professional README. This speeds up the process of creating markdown files instead of creating from scratch.
Using Inquirer in NodeJS was confusing at first and the documentation for it was overwhelming at first glance. Once I identified what I wanted to do and knew how to do it, putting this generator together became easier.

## Installation

To get started, users will have to use a terminal and clone the GitHub repository in their own directory.

	git clone git@github.com:cmdnguyen/README-Generator.git

Once cloned, users will need [VSCode](https://code.visualstudio.com/download) and open up the directory. In the terminal, you can use the following commands:

	cd README-Generator
	code .

Users will also need [NodeJS](https://nodejs.org/en) installed. I used the LTS version.

In VSCode, users will need to be in the Main directory. The `index.js` file is in there and is needed to run the generator. You can right click the main folder and `Open in Intergrated Terminal` or input the following command in the terminal.

	cd Main


## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

Boot Camp Tutor, Alexis Gonzalez

## License

MIT License

Copyright (c) 2023 Catherine Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
