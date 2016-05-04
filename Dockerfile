FROM        yyldocker/node-base

# COMMIT APP FILES
ADD         . /src/mockserver/
RUN         cd /src/mockserver/ && npm install
CMD			cd /src/mockserver/ && npm start

	