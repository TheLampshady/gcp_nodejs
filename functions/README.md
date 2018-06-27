# Cloud Functions

## Setup

Create Bucket:
```bash
gsutil mb -p $(MY_PROJECT) gs://$(BUCKET_NAME)
gsutil defacl ch -u AllUsers:R gs://$(BUCKET_NAME)
```
Create function file. Must be `index.js` or `function.js`

### Install 
gcloud components install functions

Run: 
```
yarn
```

## Deploy
	gcloud functions deploy index --trigger-http --project $(MY_PROJECT)

Move Assets:

	gsutil cp -r public  gs://[BUCKET_NAME]/public

The asset links will be:

	https://storage.googleapis.com/$(BUCKET_NAME)/public/main.css
	
	
https://us-central1-$(MY_PROJECT).cloudfunctions.net/index	
	
## Run
	gcloud functions call hello --project [MY_PROJECT]
