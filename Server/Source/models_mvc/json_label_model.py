from firebase_admin import db

class JsonLabel:
    @staticmethod
    def get_label_plants():
        ref=db.reference("Predict/Plant")
        data=ref.get()
        return data