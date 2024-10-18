# syntax=docker/dockerfile:1

# ARG for Node.js version
ARG NODE_VERSION=20.12.1

# Base image
FROM node:${NODE_VERSION}-alpine as base

# Set working directory
WORKDIR /usr/src/app

# Install production dependencies
FROM base as deps

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Build application
FROM deps as build

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of the source files into the image
COPY . .

# Run the build script
RUN npm run build

# Final image with minimal runtime dependencies
FROM base as final

ENV NODE_ENV production

# Create a non-root user to run the application
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copy package.json
COPY package.json .

# Copy production dependencies and built application
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist  

# Copy any static files (like index.html and others) if needed
COPY --from=build /usr/src/app/public ./public

# Expose the application port
EXPOSE 3300

# Command to run the application
CMD ["npm", "start"]  # Ensure this command matches your start script in package.json
