FROM centos:latest
MAINTAINER khokharshab
RUN yum install -y httpd  
WORKDIR /var/www/html
RUN git clone https://github.com/deepakkhokhar1313/nodejs.git 
RUN cp -rvf nodejs/* .
RUN rm -rf nodejs 
CMD ["/usr/sbin/httpd", "-D",  "FOREGROUND"]
EXPOSE 80
