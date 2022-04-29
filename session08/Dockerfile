FROM mongo

# environment variables
ENV MONGO_INITDB_ROOT_USERNAME admin
ENV MONGO_INITDB_ROOT_PASSWORD sd4rtg54sdfgt5
ENV MONGO_INITDB_DATABASE website01

# Copy initial script
COPY ./website01.js /docker-entrypoint-initdb.d/website01.js

# Default port
EXPOSE 27017

# Default command
CMD ["mongod"]