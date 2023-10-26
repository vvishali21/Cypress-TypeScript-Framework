#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node18.12.0-chrome107
#Create the folder where our project will be stored
RUN mkdir /my-cypress-project
#We make it our workdirectory
WORKDIR /my-cypress-project
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./tsconfig.json .
COPY ./cypress ./cypress

# Install any dependencies your tests need


RUN npm install --save-dev typescript

# Install Cypress with a specific version (adjust the version as needed)
RUN npx cypress install --version 12.17.4


#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npx","cypress","run"]
#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD [""]    
