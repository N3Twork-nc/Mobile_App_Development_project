import numpy as np
from keras.models import load_model

model=load_model('./model_train/plants_EfficientNetB4_model150.h5')
class Model:
    @staticmethod
    def PredictPlants(img):
        resuft=model.predict(img)
        y_pred=np.argmax(resuft, axis=1)
        if resuft[0][y_pred[0]]<0.7:
            return -1
        return y_pred[0]
