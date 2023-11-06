from Source import app
from Source.models_mvc.news_model import get_all_news_data
from fastapi import Response
import json
from Source.config.config import container

@app.get("/getNewsData")
def get_news_data():
    # # Lấy nội dụng báo
    # all_news = get_all_news_data()\
    # #hàm lấy thumbnail
    # async def get_thumbnail():
    #     data=[]
    #     for i in range (1,16):
    #         data.append(asyncio.ensure_future(container.download_blob(f'news/news{i}.png')))

    # # Thiết lập các thông tin về tệp trong phản hồi
    # file_headers = {
    #     "Content-Disposition": "attachment; filename=file.txt"
    # }    
    # # Chuyển đổi dữ liệu JSON thành chuỗi JSON
    # json_content = json.dumps(all_news)
    
    # # Thiết lập các thông tin về JSON trong phản hồi
    # json_headers = {
    #     "Content-Type": "application/json"
    # }
    
    # Trả về tệp và JSON dưới dạng response
    # return StreamingResponse(content=[file_content, json_content], headers=[file_headers, json_headers])
    file= container.get_blob_client('news/news1.png').download_blob().read()
    return Response(
       file, 
       media_type="application/octet-stream",
       headers={"Content-Disposition": f"attachment; filename=file_name.jpg"}
   )