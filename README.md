# CMAPI

## Description
This is an open source api to fetch details of different states of India and their Chief Ministers. It gives information about the political affiliations and history of CMs. It will help people to understand more about state politics, know more about their CMs', their backgrounds, criminal activities, development activities and much more.

## Setup

| Module | Version |
| ----------- | ----------- |
| Node | v16.13.0 |

This is very simple to setup.
 - API setup
    - To install all modules: ``` yarn install ```
    - To build typescript files: ``` yarn build ```
    - To run the app ``` yarn start ```
    - To run the app while developing ``` yarn dev ```
 - DB setup
    - Currently we are using MongoDB
    - You can create your own DB and put the state.json in data folder
    - Put the credentials in .env file in the root folder 

 - Environment file
    ```
    PORT = 8080

    MONGOUSER = <your mongo username>
    MONGOPASSWORD = <your mongo database password> 
    MONGOCLUSTER = <your mongo cluster name>
    ```
    *Note: not your mongo account password*



