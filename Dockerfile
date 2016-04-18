FROM        yyldocker/node-base:v1

# COMMIT APP FILES
ADD         . /root/mockserver/
RUN         cd /root/mockserver/ && npm install
CMD			cd /root/mockserver/ && npm start
