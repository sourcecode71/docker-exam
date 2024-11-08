FROM nginx:alpine

# Copy your HTML file into the Nginx directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 9090
EXPOSE 9090

CMD ["nginx", "-g", "daemon off;"]
