from azure.storage.blob import  BlobSasPermissions,generate_blob_sas
import datetime
import os

class CustomFunctionAzure:
    
    @staticmethod
    def generate_token_blob(blob):
        sas_token = generate_blob_sas(
            blob.account_name, 
            blob.container_name,
            blob.blob_name,
            account_key=os.environ['account_key_azure'],
            permission=BlobSasPermissions(read=True),
            expiry=datetime.datetime.now() + datetime.timedelta(hours=1)
        )
        return sas_token