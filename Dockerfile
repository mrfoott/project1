# Sử dụng Node.js image chính thức
FROM node:18

# Tạo thư mục làm việc
WORKDIR /usr/src/app

# Sao chép file package.json và package-lock.json
ADD package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép mã nguồn vào container
ADD . .

# Expose cổng mà ứng dụng sẽ chạy
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "index.js"]