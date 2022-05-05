FROM node

ENV NODE_ENV=production
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www
RUN npm install --production

EXPOSE $PORT
ENTRYPOINT ["npm","start"]