# Use an Nginx base image to serve the HTML file
FROM nginx:alpine

# Copy the HTML file to the Nginx web root directory
COPY shruti.html /usr/share/nginx/html/index.html

# Expose the port Nginx will serve on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
