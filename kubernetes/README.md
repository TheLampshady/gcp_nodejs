# Kubernetes
This approach will deploy a NodeJS webserver to Kubernetes, accessable through an external IP.
The resulting architecture will contain 
* A Kubernetes Cluster
* Two VMs for hosting a deployment and pods with NodeJS instances, 
* A services for the Load Balancer
* A docker image for running the application

## Setup

### Install 
gcloud components install kubectl

gcloud auth configure-docker

### Enable APIS
https://console.cloud.google.com/apis/api/container.googleapis.com/overview?project=MY_PROJECT

## Create Application

### Containers

### Google Cluster
```bash
gcloud container clusters create my-cluster \
    --scopes "cloud-platform" \
    --num-nodes 2
```
**Extra params:**
```bash
gcloud container clusters create my-cluster \
    --scopes "cloud-platform" \
    --num-nodes 2 \
    --project ${MY_PROJECT} \
    --zone us-central1-f
```

View it at:
```
https://console.cloud.google.com/kubernetes/list?project=[YOUR_PROJECT_ID]
```
### Docker Image
```bash
IMAGE_NAME=gcr.io/[YOUR_PROJECT_ID]/node-image
docker build -t ${IMAGE_NAME} .
gcloud docker -- push ${IMAGE_NAME}
```

View it at:
```
https://console.cloud.google.com/gcr/images/[YOUR_PROJECT_ID]?project=[YOUR_PROJECT_ID]
```

### Kubernetes
####Deployments

```
kubectl run [MY_APP] --image=${IMAGE_NAME} --port=8080 --save-config
```

or 

```
kubectl apply -f k8s/deployment.yaml
```

#### Service
```bash
kubectl expose deployment [MY_APP] --type=LoadBalancer
```

```
kubectl apply -f k8s/service.yaml
```


## Manage

kubectl get po

### Config file
kubectl config view

cat ~/.kube/config

kubectl config current-context


### Docker 
docker run -i -t ${IMAGE_NAME} /bin/bash

docker run -p 9090:8080 -d ${IMAGE_NAME}

## Update
```bash
docker build -t ${IMAGE_NAME} .
kubectl set image deployment/${MY_APP} ${MY_APP}=${IMAGE_NAME}
```



## Clean up 
```bash
kubectl delete service [MY_SERVICE]
kubectl delete deployment ${MY_APP}
docker rmi ${IMAGE_NAME} -f
```
