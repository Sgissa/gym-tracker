# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# RUN npm run build

# RUN npm install -g serve
# CMD ["serve", "-s", "build", "-l", "3000"]

# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy the entire project
COPY . .

# Build Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start Next.js
CMD ["npm", "start"]
