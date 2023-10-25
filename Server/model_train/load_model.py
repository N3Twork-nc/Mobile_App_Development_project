
import numpy as np
from keras.models import load_model


class Model:
    @staticmethod
    def PredictPlants(img):
        model=load_model('path')
        resuft=model.predict(img)
        y_pred=np.argmax(resuft, axis=1)
        return y_pred