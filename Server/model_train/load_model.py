from keras.models import load_model
import numpy as np

class Model:
    @staticmethod
    def PredictPlants(img):
        model=load_model("./model_train/test.h5")
        resuft=model.predict(img)
        y_pred=np.argmax(resuft, axis=1)
        return y_pred
