import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("./Source/config/firebase.json")
firebase_admin.initialize_app(cred, {'databaseURL':'https://mobile-app-devolopment-c7988-default-rtdb.asia-southeast1.firebasedatabase.app',
                                     'storageBucket': 'mobile-app-devolopment-c7988.appspot.com'})