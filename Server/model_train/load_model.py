from keras.models import load_model
import numpy as np
from Source.config.google_cloud_storage import Storage
from io import BytesIO

class Model:
    @staticmethod
    def PredictPlants(img):
        model=load_model(BytesIO('model'))
        resuft=model.predict(img)
        y_pred=np.argmax(resuft, axis=1)
        return y_pred