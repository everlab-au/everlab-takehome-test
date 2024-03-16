# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

COPY ./build .

# Install the app dependencies inside the Docker image
RUN npm install

# Expose port 3000 for the app to be accessible
EXPOSE 3000

# Define the command to run your app
CMD [ "node", "server.js" ]