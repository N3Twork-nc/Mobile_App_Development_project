from firebase_admin import db

class JsonInfo:
    @staticmethod
    def get_info_plants(index):
        ref=db.reference(f"PlantInfo/{index}")
        data=ref.get()
        return data