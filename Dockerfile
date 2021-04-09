FROM centos:latest
MAINTAINER khokharshab
RUN yum install httpd -y 
RUN yum install git -y
WORKDIR /var/www/html
RUN cd /var/www/html
RUN git clone -b master https://github.com/deepakkhokhar1313/nodejs.git 
RUN cp -rvf nodejs/* .
RUN rm -rf nodejs 
CMD ["/usr/sbin/httpd", "-D",  "FOREGROUND"]
EXPOSE 80
