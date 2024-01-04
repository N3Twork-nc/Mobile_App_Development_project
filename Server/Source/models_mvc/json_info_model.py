from firebase_admin import db

class JsonInfo:
    @staticmethod
    def get_info_plants(index):
        ref=db.reference(f"PlantInfo/{index}")
        data=ref.get()
        return data
    @staticmethod
    def get_index_plant(plantName):
        ref=db.reference(f"PlantInfo")
        index=ref.order_by_child('PlantName').equal_to(plantName).get().keys()
        return list(index)[0]
    