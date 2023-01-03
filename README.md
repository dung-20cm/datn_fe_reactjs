## Pm2

`nginx`
`Run build`
`pm2 --name le-reactjs  serve build/ 5001 --spa`

## Cấu trúc dự án

`public: Folder này của React tạo ra
@types: Chứa các file định nghĩa interface, type cho Typescript
apis: Hay còn gọi là services. Chứa các khai báo function get api như axios,…
App: Chứa component App
assets: Chứa ảnh, videos, file, …
components: Chứa các folder component, trong mỗi folder là các file component
constansts: Chứa các các hằng số, enum
guards: Chứa các Route cần quyền truy cập
helpers: Chứa các function hay dùng, lặp đi lặp lại
hooks: Chứa các hook đang dùng
layouts: Chứa layout của dự án
pages: Chứa các trang của dự án
reducer: Chứa file reducer
routes: Chứa các route
store: chứa file store`

## Cấu hình nginx

`server {
access_log /var/log/nginx/le-reactjs.net-access.log;
error_log /var/log/nginx/le-reactjs.net-error.log;

         root /var/www/tranining/reactjs-ecommerce/build;
         location / {
                proxy_pass   http://127.0.0.1:5001;
         }

         # PHP-FPM Configuration Nginx
         location ~ \.php$ {
                 try_files $uri =404;
                 fastcgi_split_path_info ^(.+\.php)(/.+)$;
                 fastcgi_pass unix:/run/php-fpm/www.sock;
                 fastcgi_index index.php;
                 fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                 include fastcgi_params;
                 fastcgi_buffer_size 256k;
                 fastcgi_buffers 4 256k;
                 fastcgi_busy_buffers_size 512k;
                 fastcgi_read_timeout 600;
         }
        location ~* \.(?:jpg|jpeg|gif|png|ico|svg|woff2|ttf)$ {
                 expires 1w;
                 access_log off;
                 add_header Cache-Control "public";
        }

        # CSS and Javascript
        location ~* \.(?:css|js)$ {
                expires 1w;
                access_log off;
                 add_header Cache-Control "public";
        }

}

server {
if ($host = le-reactjs.localhost:3006) {
return 301 https://$host$request_uri;
}

    server_name le-reactjs.localhost:3006;
    listen 80;
    return 404; # managed by Certbot

}
server {
if ($host = le-reactjs.localhost:3006) {
return 301 https://$host$request_uri;
} # managed by Certbot

         server_name le-reactjs.localhost:3006;
    listen 80;
    return 404; # managed by Certbot

}`

/var/www/tranining/reactjs-ecommerce
