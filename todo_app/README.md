Run and deploy in Kubernetes

Prerequisites
- A running Kubernetes cluster (k3d, minikube, Docker Desktop, or cloud)
- `kubectl` configured to talk to the cluster (`kubectl get nodes` should work)

Quick deploy

```bash
# create a cluster with k3d (optional)
k3d cluster create -a 2

# create the deployment from the published image
kubectl create deployment todo-app --image=ajay26188/todo-app:1.0

# verify pods are running
kubectl get pods -l app=todo-app

# stream logs (you should see "Server started in port NNNN")
kubectl logs -f deployment/todo-app
```
