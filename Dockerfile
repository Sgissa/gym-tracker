# Use Debian-based Node image (works on M1/M2 Macs)
FROM node:18-bullseye AS base
WORKDIR /app

# Copy package manifest (for caching installs)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Production runtime image
FROM node:18-bullseye AS runner
WORKDIR /app

# Copy built output
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
