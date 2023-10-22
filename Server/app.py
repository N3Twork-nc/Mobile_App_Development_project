from Source import app
import uvicorn
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
from fastapi.middleware.cors import CORSMiddleware

# Cấu hình CORS (nếu cần thiết)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# app.add_middleware(HTTPSRedirectMiddleware)

if __name__ == '__main__':
    ssl_certfile = "./key/csr.pem"
    ssl_keyfile = "./key/private.pem"
    uvicorn.run(app, host="0.0.0.0", port=8080)