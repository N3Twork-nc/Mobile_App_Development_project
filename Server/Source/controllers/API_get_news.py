from Source import app
from Source.models_mvc.news_model import get_all_news_data
from Source.security import Authentication
from fastapi import Depends

@app.get("/getNewsData")
def get_news_data():
    all_news = get_all_news_data()
    return all_news