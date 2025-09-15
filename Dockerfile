FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
        
# copy app source
COPY . .
        
# build
RUN npm run build
        
# expose port
#EXPOSE 3000
        
# start app
CMD ["npm", "start"]