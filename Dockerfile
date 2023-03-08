# Base image
FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Expose the port that the server will run on
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
