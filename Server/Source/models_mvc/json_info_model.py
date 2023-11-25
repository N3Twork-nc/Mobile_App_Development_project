from firebase_admin import db

class JsonInfo:
    @staticmethod
    def get_info_plants():
        ref=db.reference("PlantInfo")
        data=ref.get()
        return data