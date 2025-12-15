## Run the app in Kubernetes

This app is packaged as a Docker image and deployed to an existing Kubernetes cluster using a Deployment.

### Prerequisites
- A running Kubernetes cluster (e.g. k3d, minikube, or a cloud cluster)
- `kubectl` configured to talk to your cluster (`kubectl get nodes` works)
- The image is available in a registry the cluster can pull from (Docker Hub in this case)

### Deploy
Create a Deployment using the published Docker Hub image:

```bash
kubectl create deployment random-logger --image=ajay26188/random-logger:1.0
```

### Verify
Verify it's running:

```bash
kubectl get deployments
kubectl get pods
```

### View logs

```bash
kubectl logs -f deployment/random-logger
```

