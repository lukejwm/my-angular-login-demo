# Admin Tools Frontend

This project uses Angular 14.1.3 and depends on NodeJS version 16.17.0 (current LTS version). 

Simply use "npm install" to download all of the core dependencies and "ng serve" to compile and run the application. Please ensure you are familiar with the Angular command line tooling and Angular best practices before attempting to work on this project. 

As a general rule, we should aim to always use the latest version Angular, which is typically updated every 6 months. Use "ng update" to achieve this. We should also limit ourselves to only using the current LTS version of Node as it is generaly more stable than newer versions.  

This project is the frontend part of Admin Tools application, which relies on its backend component to function. Please see the full documentation for the Admin Tools project for understanding how it works.

## About Admin Tools

Admin Tools is a web-based in-house application intended to help simplify general management and administration tasks. The intended users are Management and members of the Technology and Data Analytics teams.  

In its current state, the Admin Tools has the following functions: 
- Allows for Project PDF documents to be uploaded to the Project Document Search Engine

Planned functions that are to be added at a later date:  
- Allows for pricing data CSV files to be uploaded and processed by the Indices Calcuation Service,
- Displays our current usage of AWS and billing projections with warnings if we are going over budget (should always be checked before creating new cloud instances),
- Displays the health and usage of our ALL services that are built and maintained by Allied Offsets (the Database and API being the most important)

Other functions will also be added as and when they are required or requested.