import firebase_admin
from firebase_admin import credentials
import os

#config JWT
os.environ["SECRET_KEY"] = 'c2e6012df7d0d3a6f225f3f4f0f0e292113347c2b5dc35917834b261daf7d9f9'
os.environ["SECURITY_ALGORITHM"] = 'HS256'

#config firebase
cred = credentials.Certificate("./Source/config/firebase.json")
firebase_admin.initialize_app(cred, {'databaseURL':'https://mobile-app-devolopment-c7988-default-rtdb.asia-southeast1.firebasedatabase.app',
                                     'storageBucket': 'mobile-app-devolopment-c7988.appspot.com'})

#config azure storage
os.environ['storage_connection_string'] = 'DefaultEndpointsProtocol=https;AccountName=caothi;AccountKey=YEntRbcbq20f2JdnbdictnmEiR0OnVpIp2R3Tem6te2FFuApw3XxD+T7na6r4e+CbtKiW22wjCya+AStNDnYgg==;EndpointSuffix=core.windows.net'

