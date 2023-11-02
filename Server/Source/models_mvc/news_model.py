from pydantic import BaseModel
from firebase_admin import db

class NewsData(BaseModel):
    title: str
    introduction: str
    content: list[dict]

def get_all_news_data():
    ref = db.reference('News')
    news_dict = ref.get()
    all_news = []
    if news_dict:
        for news_key, news_data in news_dict.items():
            news = NewsData(**news_data)
            all_news.append(news)
    return all_news