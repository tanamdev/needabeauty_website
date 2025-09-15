FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# ARG NEXT_PUBLIC_BRAND_NAME
# ENV NEXT_PUBLIC_BRAND_NAME=$NEXT_PUBLIC_BRAND_NAME
        
# copy app source
COPY . .
        
# build
RUN npm run build
        
# expose port
#EXPOSE 3000
        
# start app
CMD ["npm", "start"]