# Marvel Application
This project was created by Denis Carvalho, as a skill test, 
in order to run this project please proceed to the sections below.

# How to start the application

After you installed Angular CLI and NodeJS
copy the repository into a folder of your choice by running the following command:
`git clone https://github.com/deniscarvasilva/marvelapp-angular.git`

After you have successfully cloned the repository, 
go inside the newly created folder and run the following command:
`npm install`

Then you only need to run the following command while inside the folder:
`ng serve`

A new browser tab will be created with the address: http://localhost:4200/
then you can navigate the code and explore the application!

If you have any questions or problems, refer to the requirements below for
more information. You can also contact me via email at deniscarvasilva@gmail.com


# Requirements
[NodeJS](https://nodejs.org/en/) - Using the version 16.16.0

[Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli)

It is required that you already have installed Angular CLI and NodeJS.
_________

This project uses the Marvel Developer API and my personal key and hash are available in the project. 
If this key and hash are expired, then you need to refer to the link: [MARVEL API Documentation](https://developer.marvel.com/documentation/getting_started)

There you can create a new account and then use the provided 
keys to generate a new hash. After that you can set up the environment credentials.

To generate the new hash, go to[MD5 Generator](https://www.md5hashgenerator.com/)
combine the timestamp, in this case 1, add your personal private key and then your public key.
The new hash will be generated, then you can use in the environment.ts file inside the src/app/environments folder.

