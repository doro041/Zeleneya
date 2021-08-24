FROM node:12-alpine
 
 
# Expose the default port
EXPOSE 3000
 
# Create/Set the working directory
WORKDIR /Zeleneya--backend
 
COPY . .
RUN yarn install
 
 Copy . .
# Set Command
CMD ["yarn", "start"]