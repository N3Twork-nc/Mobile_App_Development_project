from Source import app
from Source.models_mvc.news_model import get_all_news_data
from Source.config.config import container
from Source.classes.azure_class import CustomFunctionAzure




@app.get("/getNewsData")
def get_news_data():
    all_news = get_all_news_data()
    for news in all_news:
        blob=container.get_blob_client(news.thumbnail)
        token=CustomFunctionAzure.generate_token_blob(blob)
        news.thumbnaillink=f'https://caothi.blob.core.windows.net/myplants/{news.thumbnail}?{token}'
    return all_news
        
