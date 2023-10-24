
import numpy as np
# from Source.config.google_cloud_storage import Storage
from keras.models import load_model


class Model:
    @staticmethod
    def PredictPlants(img):
        model=Storage.model
        resuft=model.predict(img)
        y_pred=np.argmax(resuft, axis=1)
        return y_pred